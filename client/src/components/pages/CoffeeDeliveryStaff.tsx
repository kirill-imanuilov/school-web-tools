import '../../index.css';
import { useState, useEffect } from 'react';
import { CoffeeDeliveryStaffOrder } from '../CoffeeDeliveryStaffOrder';
import { Loading } from '../Loading';

export function CoffeeDeliveryStaffPage() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);
  async function getOrdersDataNotDone() {
    return await fetch(
      'http://localhost:8000/coffee_delivery/staff/get_orders_data/not_done'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getOrdersDataNotDone().then(() => {
      setIsLoading(false);
    });
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
          {isLoading === true && (
            <div className='loading-img-container'>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
