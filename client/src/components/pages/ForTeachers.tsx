import { Link } from 'react-router-dom';
import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function ForTeachersPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Для учителей</h1>
        <div className='container-content'>
          <Link to='coffee_delivery/' className='button-link'>
            <button>Доставка кофе</button>
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
