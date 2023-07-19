import { Link } from 'react-router-dom';
import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function AboutPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>О сайте</h1>
        <div className='container-content'>
          <Link to='feedback/' className='button-link'>
            <button>Обратная связь</button>
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
