import { Link } from 'react-router-dom';
import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function LostThingsPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Потерянные вещи</h1>
        <div className='container-content'>
          <Link to='found/' className='button-link'>
            <button>Я нашёл вещь</button>
          </Link>
          <Link to='lost/' className='button-link'>
            <button>Я потерял вещь</button>
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
