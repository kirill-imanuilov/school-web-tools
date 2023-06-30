import { Link } from 'react-router-dom';
import '../../index.css';
import { Stopwatch } from '../Stopwatch';

export function StopwatchPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Секундомер</h1>
        <div className='container-content'>
          <Stopwatch />
          <Link to='/time/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
