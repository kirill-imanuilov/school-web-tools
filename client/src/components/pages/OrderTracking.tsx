import { Link, useParams } from 'react-router-dom';
import '../../index.css';

export function OrderTrackingPage() {
  const { id } = useParams();
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Заказ №{id}</h1>
        <div className='container-content'>
          <Link to='/for_teachers/coffee_delivery/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
