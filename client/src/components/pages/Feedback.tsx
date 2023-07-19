import '../../index.css';
import { FeedbackForm } from '../FeedbackForm';
import { BackButton } from '../buttons/BackButton';

export function FeedbackPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Обратная связь</h1>
        <div className='container-content'>
          <FeedbackForm />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
