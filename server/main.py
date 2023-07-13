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
        data = cursor.execute("""SELECT * FROM coffeeDeliveryOrdersData WHERE isCourierSent = 0 ORDER BY deliveryTime""").fetchall()
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

