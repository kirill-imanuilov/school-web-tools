import '../../index.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface orderData {
  deliveryTime: string;
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

export function CoffeeDeliveryForm() {
  const date = new Date();
  const coffeeCookingTime = 5;
  const allMinutes =
    date.getMinutes() + date.getHours() * 60 + coffeeCookingTime;
  const hours = parseInt(`${allMinutes / 60}`);
  const minutes = allMinutes % 60;
  const closingTime = '26:00';
  var time = '';

  if (`${hours}`.length === 1 && `${minutes}`.length === 1) {
    time = `0${hours}:0${minutes}`;
  } else if (`${hours}`.length === 1) {
    time = `0${hours}:${minutes}`;
  } else if (`${minutes}`.length === 1) {
    time = `${hours}:0${minutes}`;
  } else {
    time = `${hours}:${minutes}`;
  }

  const [deliveryTime, setDeliveryTime] = useState(time);
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [building, setBuilding] = useState('Старый корпус');
  const [coffee, setCoffee] = useState('Американо');
  const [cinnamon, setCinnamon] = useState(false);
  const [lemon, setLemon] = useState(false);
  const [sugar, setSugar] = useState(false);
  const [cream, setCream] = useState(false);
  const [syrop, setSyrop] = useState('Без сиропа');
  const [addition, setAddition] = useState('Без дополнений');

  const orderData = {
    deliveryTime: deliveryTime,
    name: name,
    office: +office,
    building: building,
    coffee: coffee,
    cinnamon: +cinnamon,
    lemon: +lemon,
    sugar: +sugar,
    cream: +cream,
    syrop: syrop,
    addition: addition,
  };

  async function postOrderData(orderData: orderData) {
    let id: number;
    return await fetch(
      'http://localhost:8000/coffee_delivery/save_order_data/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      }
    )
      .then((response) => response.json())
      .then((response) => (id = response.max_id))
      .then(() => {
        return id;
      });
  }

  const navigate = useNavigate();

  const handleSubmitButtonClick = (event: any) => {
    event.preventDefault();
    postOrderData(orderData).then((n) => navigate(`order_tracking/${n}`));
  };

  return (
    <form className='coffee-delivery-form'>
      <input
        type='text'
        placeholder='Как Вас зовут?'
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <div className='coffee-delivery-form-top-container'>
        <input
          type='number'
          className='coffee-delivery-form-input-office'
          placeholder='Каб.'
          min={1}
          value={office}
          onChange={(event) => setOffice(event.target.value)}
        />
        <select
          className='coffee-delivery-form-select-building'
          value={building}
          onChange={(event) => setBuilding(event.target.value)}
        >
          <option>Старый корпус</option>
          <option>Новый корпус</option>
        </select>
      </div>
      <input
        className='coffee-delivery-form-input-time'
        type='time'
        min={time}
        max={closingTime}
        value={deliveryTime}
        onChange={(event) => setDeliveryTime(event.target.value)}
      />
      <select
        value={coffee}
        onChange={(event) => setCoffee(event.target.value)}
      >
        <option>Американо</option>
        <option>Капучино</option>
        <option>Латте</option>
        <option>Раф</option>
        <option>Ристретто</option>
        <option>Эспрессо</option>
      </select>
      <label className='coffee-delivery-form-checkbox-label'>
        <input
          type='checkbox'
          checked={cinnamon}
          onChange={(event) => setCinnamon(event.target.checked)}
        />
        Корица
      </label>
      <label className='coffee-delivery-form-checkbox-label'>
        <input
          type='checkbox'
          checked={lemon}
          onChange={(event) => setLemon(event.target.checked)}
        />
        Лимон
      </label>
      <label className='coffee-delivery-form-checkbox-label'>
        <input
          type='checkbox'
          checked={sugar}
          onChange={(event) => setSugar(event.target.checked)}
        />
        Сахар
      </label>
      <label className='coffee-delivery-form-checkbox-label'>
        <input
          type='checkbox'
          checked={cream}
          onChange={(event) => setCream(event.target.checked)}
        />
        Сливки
      </label>
      <select value={syrop} onChange={(event) => setSyrop(event.target.value)}>
        <option>Без сиропа</option>
        <option>Ванильный сироп</option>
        <option>Грушевый сироп</option>
        <option>Имбирный сироп</option>
        <option>Карамельный сироп</option>
        <option>Шоколадный сироп</option>
      </select>
      <select
        value={addition}
        onChange={(event) => setAddition(event.target.value)}
      >
        <option>Без дополнений</option>
        <option>Печенье</option>
        <option>Шоколадка</option>
      </select>
      {time <= closingTime && name !== '' && office !== '' && (
        <button type='submit' onClick={handleSubmitButtonClick}>
          Отправить
        </button>
      )}
      {(time > closingTime || name === '' || office === '') && (
        <button className='submit-button-disabled' type='submit' disabled>
          Отправить
        </button>
      )}
    </form>
  );
}
