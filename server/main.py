import sqlite3
import datetime
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


connection = sqlite3.connect("./data/db.sqlite3")


class OrderData(BaseModel):
    deliveryTime: str
    name: str
    office: int
    building: str
    coffee: str
    cinnamon: int
    lemon: int
    sugar: int
    cream: int
    syrop: str
    addition: str


class FeedbackData(BaseModel):
    userEmail: str
    userMessage: str


class LostThingFoundData(BaseModel):
    thingName: str
    thingIMG: str
    thingDetectionPlace: str
    thingReceiptPlace: str
    userMessage: str


class LostThingLostData(BaseModel):
    thingName: str
    thingIMG: str
    thingLossPlace: str
    userContacts: str
    userMessage: str


with connection:
    cursor = connection.cursor()
    cursor.execute("""CREATE TABLE IF NOT EXISTS coffeeDeliveryOrdersData (
                          id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                          date TEXT NOT NULL,
                          orderTime TEXT NOT NULL,
                          deliveryTime TEXT NOT NULL,
                          isCourierSent INTEGER NOT NULL,
                          name TEXT NOT NULL,
                          office INTEGER NOT NULL,
                          building TEXT NOT NULL,
                          coffee TEXT NOT NULL,
                          cinnamon INTEGER NOT NULL,
                          lemon INTEGER NOT NULL,
                          sugar INTEGER NOT NULL,
                          cream INTEGER NOT NULL,
                          syrop TEXT NOT NULL,
                          addition TEXT NOT NULL
                      );
                   """)
    cursor.execute("""CREATE TABLE IF NOT EXISTS feedbacksData (
                          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                          date TEXT NOT NULL,
                          feedbackTime TEXT NOT NULL,
                          isIssueSolved INTEGER NOT NULL,
                          userEmail TEXT NOT NULL,
                          userMessage TEXT NOT NULL
                      );
                   """)
    cursor.execute("""CREATE TABLE IF NOT EXISTS lostThingsFoundData (
                          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                          date TEXT NOT NULL,
                          createdAt TEXT NOT NULL,
                          isThingFound INTEGER NOT NULL,
                          thingName TEXT NOT NULL,
                          thingIMG BLOB NOT NULL,
                          thingDetectionPlace TEXT NOT NULL,
                          thingReceiptPlace TEXT NOT NULL,
                          userMessage TEXT
                      );
                   """)
    cursor.execute("""CREATE TABLE IF NOT EXISTS lostThingsLostData (
                          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                          date TEXT NOT NULL,
                          createdAt TEXT NOT NULL,
                          isThingFound INTEGER NOT NULL,
                          thingName TEXT NOT NULL,
                          thingIMG BLOB NOT NULL,
                          thingLossPlace TEXT NOT NULL,
                          userContacts TEXT NOT NULL,
                          userMessage TEXT NOT NULL
                   )""")


@app.post("/coffee_delivery/save_order_data/")
async def save_order_data(order_data: OrderData):
    with connection:
        cursor = connection.cursor()
        cursor.execute(f"""INSERT INTO coffeeDeliveryOrdersData (date,
                                                                 orderTime,
                                                                 deliveryTime,
                                                                 isCourierSent,
                                                                 name,
                                                                 office,
                                                                 building,
                                                                 coffee,
                                                                 cinnamon,
                                                                 lemon,
                                                                 sugar,
                                                                 cream,
                                                                 syrop,
                                                                 addition)
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
                       """, (str(datetime.date.today()),
                             str(datetime.datetime.now().time())[0:8],
                             order_data.deliveryTime,
                             0,
                             order_data.name,
                             order_data.office,
                             order_data.building,
                             order_data.coffee,
                             order_data.cinnamon,
                             order_data.lemon,
                             order_data.sugar,
                             order_data.cream,
                             order_data.syrop,
                             order_data.addition))
        max_id = cursor.execute("""SELECT MAX(id) FROM coffeeDeliveryOrdersData;""").fetchone()[0]
    return {"max_id": max_id}


@app.get("/coffee_delivery/get_order_data/{order_id}")
async def get_order_data(order_id: int):
    with connection:
        cursor = connection.cursor()
        data = cursor.execute(f"""SELECT * FROM coffeeDeliveryOrdersData WHERE id = {order_id}""").fetchone()
        return {
                "id": data[0],
                "date": data[1],
                "orderTime": data[2],
                "deliveryTime": data[3],
                "isCourierSent": data[4],
                "name": data[5],
                "office": data[6],
                "building": data[7],
                "coffee": data[8],
                "cinnamon": data[9],
                "lemon": data[10],
                "sugar": data[11],
                "cream": data[12],
                "syrop": data[13],
                "addition": data[14]
                }


@app.get("/coffee_delivery/staff/get_orders_data/not_done")
async def get_orders_data_not_done():
    with connection:
        cursor = connection.cursor()
        data = cursor.execute("""SELECT * FROM coffeeDeliveryOrdersData WHERE isCourierSent = 0 AND date = ? ORDER BY deliveryTime""", (str(datetime.date.today()),)).fetchall()
        a = []
        for elem in data:
            a.append({
                "id": elem[0],
                "date": elem[1],
                "orderTime": elem[2],
                "deliveryTime": elem[3],
                "isCourierSent": elem[4],
                "name": elem[5],
                "office": elem[6],
                "building": elem[7],
                "coffee": elem[8],
                "cinnamon": elem[9],
                "lemon": elem[10],
                "sugar": elem[11],
                "cream": elem[12],
                "syrop": elem[13],
                "addition": elem[14]
                })
        return a


@app.get("/coffee_delivery/staff/courier_sent/{order_id}")
async def courier_sent(order_id: int):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""UPDATE coffeeDeliveryOrdersData SET isCourierSent = 1 WHERE id = ?;""", (str(order_id),))
    return {"message": "success"}


@app.post("/feedback/save_feedback_data/")
async def save_feedback_data(feedbackData: FeedbackData):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""INSERT INTO feedbacksData (date,
                                                     feedbackTime,
                                                     isIssueSolved,
                                                     userEmail,
                                                     userMessage)
                          VALUES (?, ?, ?, ?, ?);
                       """, (str(datetime.date.today()),
                             str(datetime.datetime.now().time())[0:8],
                             0,
                             feedbackData.userEmail,
                             feedbackData.userMessage))


@app.get("/feedback/staff/get_feedbacks_data/not_solved")
async def get_feedbacks_data_not_solved():
    with connection:
        cursor = connection.cursor()
        data = cursor.execute("""SELECT * FROM feedbacksData WHERE isIssueSolved = 0""").fetchall()
        a = []
        for elem in data:
            a.append({
                "id": elem[0],
                "date": elem[1],
                "feedbackTime": elem[2],
                "isIssueSolved": elem[3],
                "userEmail": elem[4],
                "userMessage": elem[5],
                })
        return a


@app.get("/feedback/staff/issue_solved/{issue_id}")
async def issue_solved(issue_id: int):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""UPDATE feedbacksData SET isIssueSolved = 1 WHERE id = ?;""", (str(issue_id),))
    return {"message": "success"}

@app.post("/lost_things/found/save_lost_thing_found_data/")
async def save_lost_thing_found_data(lostThingFoundData: LostThingFoundData):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""INSERT INTO lostThingsFoundData (date,
                                                           createdAt,
                                                           isThingFound,
                                                           thingName,
                                                           thingIMG,
                                                           thingDetectionPlace,
                                                           thingReceiptPlace,
                                                           userMessage)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                       """, (str(datetime.date.today()),
                             str(datetime.datetime.now().time())[0:8],
                             0,
                             lostThingFoundData.thingName,
                             lostThingFoundData.thingIMG,
                             lostThingFoundData.thingDetectionPlace,
                             lostThingFoundData.thingReceiptPlace,
                             lostThingFoundData.userMessage
                             ))
@app.post("/lost_things_lost/save_lost_thing_lost_data")
async def save_lost_thing_lost_data(lostThingLostData: LostThingLostData):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""
                       INSERT INTO lostThingsLostData (date,
                                                       createdAt,
                                                       isThingFound,
                                                       thingName,
                                                       thingIMG,
                                                       thingLossPlace,
                                                       userContacts,
                                                       userMessage)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                       """, (str(datetime.date.today()),
                             str(datetime.datetime.now().time())[0:8],
                             0,
                             lostThingLostData.thingName,
                             lostThingLostData.thingIMG,
                             lostThingLostData.thingLossPlace,
                             lostThingLostData.userContacts,
                             lostThingLostData.userMessage
                             ))
    return {"message": "success"}

@app.get("/lost_things/found/get_lost_things_found_data/")
async def get_lost_things_found_data():
    with connection:
        cursor = connection.cursor()
        data = cursor.execute("""SELECT * FROM lostThingsFoundData WHERE isThingFound = 0 ORDER BY id DESC;""").fetchall()
        a = []
        for elem in data:
            a.append({
                "id": elem[0],
                "date": elem[1],
                "createdAt": elem[2],
                "isThingFound": elem[3],
                "thingName": elem[4],
                "thingIMG": elem[5],
                "thingDetectionPlace": elem[6],
                "thingReceiptPlace": elem[7],
                "userMessage": elem[8]
                })
        return a

@app.get("/lost_things/lost/get_lost_things_lost_data/")
async def get_lost_things_lost_data():
    with connection:
        cursor = connection.cursor()
        data = cursor.execute("""SELECT * FROM lostThingsLostData WHERE isThingFound = 0 ORDER BY id DESC;""").fetchall()
        a = []
        for elem in data:
            a.append({
                "id": elem[0],
                "date": elem[1],
                "createdAt": elem[2],
                "isThingFound": elem[3],
                "thingName": elem[4],
                "thingIMG": elem[5],
                "thingLossPlace": elem[6],
                "userContacts": elem[7],
                "userMessage": elem[8]
                })
        return a

@app.get("/lost_things/found/thing_found/{thing_id}")
async def lost_things_found_thing_found(thing_id: int):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""UPDATE lostThingsFoundData SET isThingFound = 1 WHERE id = ?;""", (str(thing_id),))
    return {"message": "success"}

@app.get("/lost_things/lost/thing_found/{thing_id}")
async def lost_things_lost_thing_found(thing_id: int):
    with connection:
        cursor = connection.cursor()
        cursor.execute("""UPDATE lostThingsLostData SET isThingFound = 1 WHERE id = ?;""", (str(thing_id),))
    return {"message": "success"}
