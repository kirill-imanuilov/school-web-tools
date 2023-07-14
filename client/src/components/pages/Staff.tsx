import { Link } from 'react-router-dom';
import '../../index.css';

export function StaffPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Для персонала</h1>
        <div className='container-content'>
          <Link to='coffee_delivery/' className='button-link'>
            <button>Заказы (доставка кофе)</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
