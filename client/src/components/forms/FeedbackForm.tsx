import '../../index.css';
import { useState } from 'react';

interface feedbackData {
  userEmail: string;
  userMessage: string;
}

export function FeedbackForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSubmitButtonClick = () => {
    postFeedbackData(feedbackData);
  };

  async function postFeedbackData(feedbackData: feedbackData) {
    return await fetch('http://localhost:8000/feedback/save_feedback_data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedbackData),
    });
  }

  const feedbackData = {
    userEmail: userEmail,
    userMessage: userMessage,
  };

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
