interface orderData {
  id: number;
  date: string;
  orderTime: string;
  deliveryTime: string;
  isCourierSent: number;
  name: string;
  office: number;
  building: string;
  coffee: string;
  cinnamon: number;
  lemon: number;
  sugar: number;
  cream: number;
  syrop: string;
  addition: string;
}

interface coffeeDeliveryStaffOrderProps {
  orderData: orderData;
}

async function courierSent(id: number) {
  await fetch(`http://localhost:8000/coffee_delivery/staff/courier_sent/${id}`);
}

function handleCourierSentButtonClick(event: any, id: number) {
  courierSent(id).then(() => window.location.reload());
}

export function CoffeeDeliveryStaffOrder(props: coffeeDeliveryStaffOrderProps) {
  return (
    <div className='coffee-delivery-staff-order'>
      <div className='coffee-delivery-staff-order-title'>
        Заказ №{props.orderData.id}
      </div>
      <div className='coffee-delivery-staff-order-content'>
        <ul>
          <li>
            Кофе: <strong>{props.orderData.coffee.toLowerCase()}</strong>
          </li>
          <li>
            Добавки:
            <strong>
              {props.orderData.cinnamon === 0 &&
                props.orderData.lemon === 0 &&
                props.orderData.sugar === 0 &&
                props.orderData.cream === 0 &&
                ' нет'}
            </strong>
            {(props.orderData.cinnamon === 1 ||
              props.orderData.lemon === 1 ||
              props.orderData.sugar === 1 ||
              props.orderData.cream === 1) && (
              <ul>
                <strong>
                  {props.orderData.cinnamon === 1 && <li>корица</li>}
                </strong>
                <strong>{props.orderData.lemon === 1 && <li>лимон</li>}</strong>
                <strong>{props.orderData.sugar === 1 && <li>сахар</li>}</strong>
                <strong>
                  {props.orderData.cream === 1 && <li>сливки</li>}
                </strong>
              </ul>
            )}
          </li>
          <li>
            Сироп:
            <strong>{props.orderData.syrop === 'Без сиропа' && ' нет'}</strong>
            <strong>
              {props.orderData.syrop !== 'Без сиропа' &&
                ' ' + props.orderData.syrop.toLowerCase()}
            </strong>
          </li>
          <li>
            Дополнения:
            <strong>
              {props.orderData.addition === 'Без дополнений' && ' нет'}
            </strong>
            <strong>
              {props.orderData.addition !== 'Без дополнений' &&
                ' ' + props.orderData.addition.toLowerCase()}
            </strong>
          </li>
          <li>
            Время заказа: <strong>{props.orderData.orderTime}</strong>
          </li>
          <li>
            Время доставки: <strong>{props.orderData.deliveryTime}</strong>
          </li>
          <li>
            Место доставки:{' '}
            <strong>
              {props.orderData.building.toLowerCase()}, {props.orderData.office}{' '}
              кабинет
            </strong>
          </li>
        </ul>
        <button
          onClick={(event) =>
            handleCourierSentButtonClick(event, props.orderData.id)
          }
        >
          Курьер отправлен
        </button>
      </div>
    </div>
  );
}
