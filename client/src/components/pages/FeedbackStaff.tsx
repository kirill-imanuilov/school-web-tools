import '../../index.css';
import { useState, useEffect } from 'react';
import { FeedbackStaffFeedback } from '../FeedbackStaffFeedback';
import { Loading } from '../Loading';

export function FeedbackStaffPage() {
  const [isLoading, setIsLoading] = useState(true);

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
    getFeedbacksDataNotSolved().then(() => {
      setIsLoading(false);
    });
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
          {isLoading === true && (
            <div className='loading-img-container'>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
