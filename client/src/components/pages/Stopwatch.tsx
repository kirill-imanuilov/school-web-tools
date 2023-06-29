import { Link } from 'react-router-dom';
import '../../index.css';

export function StopwatchPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Секундомер</h1>
        <div className='container-content'>
          <Link to='/time/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
