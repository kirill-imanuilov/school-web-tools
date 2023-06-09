import '../index.css';

export function CoffeeDeliveryForm() {
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
            <select className='coffee-delivery-form-select'
            >
                <option>
                    Ристретто
                </option>
                <option>
                    Эспрессо
                </option>
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
            </select>
            <label className='coffee-delivery-form-checkbox-label'>
                <input className='coffee-delivery-form-checkbox'
                    type='checkbox'/>
                Сахар
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input className='coffee-delivery-form-checkbox'
                    type='checkbox'/>
                Корица
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input className='coffee-delivery-form-checkbox'
                    type='checkbox'/>
                Сливки
            </label>
            <label className='coffee-delivery-form-checkbox-label'>
                <input className='coffee-delivery-form-checkbox'
                    type='checkbox'/>
                Лимон
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
                    Карамельный сироп
                </option>
                <option>
                    Шоколадный сироп
                </option>
                <option>
                    Грушевый сироп
                </option>
                <option>
                    Имбирный сироп
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
            <button
                type='submit'
            >
                Отправить
            </button>
        </form>
    );
}

