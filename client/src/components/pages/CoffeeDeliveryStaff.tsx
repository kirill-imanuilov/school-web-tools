import '../../index.css';
import { useState, useEffect } from 'react';
import { CoffeeDeliveryStaffOrder } from '../CoffeeDeliveryStaffOrder';

export function CoffeeDeliveryStaffPage() {
  const [data, setData] = useState([]);
  async function getOrdersDataNotDone() {
    return await fetch(
      'http://localhost:8000/coffee_delivery/staff/get_orders_data/not_done',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getOrdersDataNotDone();
  }, []);
  // updating data
  setTimeout(() => getOrdersDataNotDone(), 5000);

  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Заказы</h1>
        <div className='container-content'>
          {data.map((orderData, index) => (
            <CoffeeDeliveryStaffOrder orderData={orderData} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
