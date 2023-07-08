import { Link, useParams } from 'react-router-dom';
import '../../index.css';
import { useState, useEffect } from 'react';

export function OrderTrackingPage() {
  const { id } = useParams();
  const [data, setData] = useState({
    id: 0,
    date: '',
    orderTime: '',
    deliveryTime: '',
    isCourierSent: 0,
    name: '',
    office: 0,
    building: '',
    coffee: '',
    cinnamon: 0,
    lemon: 0,
    sugar: 0,
    cream: 0,
    syrop: '',
    addition: '',
  });

  async function getOrderData() {
    return await fetch(
      `http://localhost:8000/coffee_delivery/get_order_data/${id}`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getOrderData();
  }, []);
  // updating data
  setTimeout(() => getOrderData(), 5000);

  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Заказ №{id}</h1>
        <div className='container-content'>
          <div className='coffee-delivery-order-tracking-order-top-container'>
            <div>{data.name},</div>
            <div className='coffee-delivery-order-tracking-order-status-wait'>
              {data.isCourierSent === 0 && 'Ваш заказ находится в очереди'}
            </div>
            <div className='coffee-delivery-order-tracking-order-status-ready'>
              {data.isCourierSent === 1 &&
                'Ваш кофе уже готов и отправлен курьером'}
            </div>
          </div>
          <div className='coffee-delivery-order-tracking-order-details'>
            <details>
              <summary>Информация о Вашем заказе</summary>
              <ul>
                <li>
                  Время заказа: <strong>{data.orderTime}</strong>
                </li>
                <li>
                  Время доставки: <strong>{data.deliveryTime}</strong>
                </li>
                <li>
                  Место доставки:{' '}
                  <strong>
                    {data.building.toLowerCase()}, {data.office} кабинет
                  </strong>
                </li>
                <li>
                  Кофе: <strong>{data.coffee.toLowerCase()}</strong>
                </li>
                {(data.cinnamon === 1 ||
                  data.lemon === 1 ||
                  data.sugar === 1 ||
                  data.cream === 1) && (
                  <li>
                    Вы добавили в кофе:
                    <ul>
                      {data.cinnamon === 1 && (
                        <li>
                          <strong>корицу</strong>
                        </li>
                      )}
                      {data.lemon === 1 && (
                        <li>
                          <strong>лимон</strong>
                        </li>
                      )}
                      {data.sugar === 1 && (
                        <li>
                          <strong>сахар</strong>
                        </li>
                      )}
                      {data.cream === 1 && (
                        <li>
                          <strong>сливки</strong>
                        </li>
                      )}
                    </ul>
                  </li>
                )}
                {data.syrop !== 'Без сиропа' && (
                  <li>
                    Вы добавили в кофе
                    <strong>{' ' + data.syrop.toLowerCase()}</strong>
                  </li>
                )}
                {data.syrop === 'Без сиропа' && (
                  <li>Вы не добавили в кофе никакого сиропа</li>
                )}
                {data.addition !== 'Без дополнений' && (
                  <li>
                    Вы заказали с кофе
                    <strong>{data.addition === 'Печенье' && ' печенье'}</strong>
                    <strong>
                      {data.addition === 'Шоколадка' && ' шоколадку'}
                    </strong>
                  </li>
                )}
                {data.addition === 'Без дополнений' && (
                  <li>Вы ничего не заказали с кофе</li>
                )}
              </ul>
            </details>
          </div>
          <Link to='/for_teachers/coffee_delivery/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
