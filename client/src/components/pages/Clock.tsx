import { Link } from 'react-router-dom';
import '../../index.css';
import { Clock } from '../Clock';

export function ClockPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Часы</h1>
        <div className='container-content'>
          <Clock />
          <Link to='/time/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
