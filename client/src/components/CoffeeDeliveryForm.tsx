import '../index.css';

export function CoffeeDeliveryForm() {
    const date = new Date();
    const coffeeCookingTime = 5;
    const allMinutes = date.getMinutes() + date.getHours() * 60 + coffeeCookingTime;
    const hours = parseInt(`${allMinutes / 60}`);
    const minutes = allMinutes % 60;
    const startTime = '8:00';
    const closingTime = '16:00';
    var time = '';
    if (`${minutes}`.length === 1) {
        time = `${hours}:0${minutes}`;
    } else {
        time = `${hours}:${minutes}`;
    }
    return (
        <form className='coffee-delivery-form'
        >
            <input className='coffee-delivery-form-input coffee-delivery-form-input-name'
                placeholder='ФИО'/>
            <div className='coffee-delivery-form-top-container'>
                <input className='coffee-delivery-form-input coffee-delivery-form-input-office'
                    placeholder='Каб.'/>
                <select className='coffee-delivery-form-select coffee-delivery-form-select-building'
                >
                    <option>
                        Старый корпус
                    </option>
                    <option>
                        Новый корпус
                    </option>
                </select>
            </div>
            <input className='coffee-delivery-form-input coffee-delivery-form-input-time'
                type='time'
                min={time}
                max={closingTime}/>
            <select className='coffee-delivery-form-select'
            >
                <option>
                    Американо
                </option>
                <option>
                    Капучино
                </option>
                <option>
                    Латте
                </option>
                <option>
                    Раф
                </option>
                <option>
                    Ристретто
                </option>
                <option>
                    Эспрессо
                </option>
            </select>
            <label className='coffee-delivery-form-checkbox-label'>
                <input
                    type='checkbox'/>
                Корица
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input
                    type='checkbox'/>
                Лимон
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input
                    type='checkbox'/>
                Сахар
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input
                    type='checkbox'/>
                Сливки
            </label>
            <select className='coffee-delivery-form-select'
            >
                <option>
                    Без сиропа
                </option>
                <option>
                    Ванильный сироп
                </option>
                <option>
                    Грушевый сироп
                </option>
                <option>
                    Имбирный сироп
                </option>
                <option>
                    Карамельный сироп
                </option>
                <option>
                    Шоколадный сироп
                </option>
            </select>
            <select className='coffee-delivery-form-select'
            >
                <option>
                    Без дополнений
                </option>
                <option>
                    Печенье
                </option>
                <option>
                    Шоколадка
                </option>
            </select>
            {time <= closingTime && <button
                type='submit'
            >
                Отправить
            </button>}
            {time > closingTime && <button
                className='submit-button-disabled'
                type='submit'
                disabled
            >
                Отправить
            </button>}
        </form>
    );
}

