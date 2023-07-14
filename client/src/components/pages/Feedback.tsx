import { Link } from 'react-router-dom';
import '../../index.css';
import { FeedbackForm } from '../FeedbackForm';

export function FeedbackPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Обратная связь</h1>
        <div className='container-content'>
          <FeedbackForm />
          <Link to='/about/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
