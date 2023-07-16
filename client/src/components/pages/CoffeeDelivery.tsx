import { Link } from 'react-router-dom';
import '../../index.css';
import { CoffeeDeliveryForm } from '../CoffeeDeliveryForm';

export function CoffeeDeliveryPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Доставка кофе</h1>
        <div className='container-content'>
          <CoffeeDeliveryForm />
          <Link to='/for_teachers/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
