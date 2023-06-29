import { Link } from 'react-router-dom';
import '../../index.css';

export function TimePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Время</h1>
        <div className='container-content'>
          <Link to='timer/' className='button-link'>
            <button>Таймер</button>
          </Link>
          <Link to='/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
