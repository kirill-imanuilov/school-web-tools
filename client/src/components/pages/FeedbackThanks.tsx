import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function FeedbackThanksPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Спасибо!</h1>
        <div className='container-content'>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
