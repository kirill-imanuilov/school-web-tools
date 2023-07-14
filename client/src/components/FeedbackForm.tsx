import '../index.css';
import { useState } from 'react';

export function FeedbackForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSubmitButtonClick = () => {};

  return (
    <div className='feedback-form'>
      <input
        className='feedback-form-input'
        type='email'
        placeholder='E-mail'
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
      />
      <textarea
        className='feedback-form-input feedback-form-input-message'
        placeholder='Сообщение'
        value={userMessage}
        onChange={(event) => setUserMessage(event.target.value)}
      />
      <button type='submit' onClick={handleSubmitButtonClick}>
        Отправить
      </button>
    </div>
  );
}
