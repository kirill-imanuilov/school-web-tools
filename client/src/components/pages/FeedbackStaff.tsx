import '../../index.css';
import { useState, useEffect } from 'react';
import { FeedbackStaffFeedback } from '../FeedbackStaffFeedback';

export function FeedbackStaffPage() {
  const [data, setData] = useState([]);

  async function getFeedbacksDataNotSolved() {
    return await fetch(
      'http://localhost:8000/feedback/staff/get_feedbacks_data/not_solved'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getFeedbacksDataNotSolved();
  }, []);
  // updating data
  setTimeout(() => getFeedbacksDataNotSolved(), 5000);

  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Обращения</h1>
        <div className='container-content'>
          {data.map((feedbackData, index) => (
            <FeedbackStaffFeedback feedbackData={feedbackData} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
