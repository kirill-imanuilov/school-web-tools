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

