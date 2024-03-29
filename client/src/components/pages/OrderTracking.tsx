import { useParams } from 'react-router-dom';
import '../../index.css';
import { useState, useEffect } from 'react';
import { BackButton } from '../buttons/BackButton';
import { motion, AnimatePresence } from 'framer-motion';
import { Details } from '../Details';

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
      `http://localhost:8000/coffee_delivery/get_order_data/${id}`
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
          <AnimatePresence>
            <div className='coffee-delivery-order-tracking-order-top-container'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {data.name},
              </motion.div>
              {data.isCourierSent === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='coffee-delivery-order-tracking-order-status-wait'
                >
                  Ваш заказ находится в очереди
                </motion.div>
              )}
              {data.isCourierSent === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='coffee-delivery-order-tracking-order-status-ready'
                >
                  Ваш кофе уже готов и отправлен курьером
                </motion.div>
              )}
            </div>
            <Details title={'Информация о Вашем заказе'}>
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
            </Details>
          </AnimatePresence>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
