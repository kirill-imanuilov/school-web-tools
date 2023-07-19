import { Link } from 'react-router-dom';
import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function TimePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Время</h1>
        <div className='container-content'>
          <Link to='clock/' className='button-link'>
            <button>Часы</button>
          </Link>
          <Link to='timer/' className='button-link'>
            <button>Таймер</button>
          </Link>
          <Link to='stopwatch/' className='button-link'>
            <button>Секундомер</button>
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
