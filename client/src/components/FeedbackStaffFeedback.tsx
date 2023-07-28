import { ReactComponent as DoneIMG } from '../IMG/done_img.svg';
import { ReactComponent as EmailIMG } from '../IMG/email_img.svg';
import { Link } from 'react-router-dom';

interface feedbackData {
  id: number;
  date: string;
  feedbackTime: string;
  isIssueSolved: number;
  userEmail: string;
  userMessage: string;
}

interface feedbackStaffFeedbackProps {
  feedbackData: feedbackData;
}

async function issueSolved(id: number) {
  await fetch(`http://localhost:8000/feedback/staff/issue_solved/${id}`);
}

function handleIssueSolvedButtonClick(event: any, id: number) {
  issueSolved(id).then(() => window.location.reload());
}

export function FeedbackStaffFeedback(props: feedbackStaffFeedbackProps) {
  return (
    <div className='feedback-staff-feedback'>
      <div className='feedback-staff-feedback-title'>
        Обращение №{props.feedbackData.id}
      </div>
      <div className='feedback-staff-feedback-content'>
        <ul>
          <li>
            Дата: <strong>{props.feedbackData.date}</strong>
          </li>
          <li>
            Время: <strong>{props.feedbackData.feedbackTime}</strong>
          </li>
          <li>
            Почта: <strong>{props.feedbackData.userEmail}</strong>
          </li>
          <li>
            Сообщение: <strong>{props.feedbackData.userMessage}</strong>
          </li>
        </ul>
        <div className='feedback-staff-feedback-bottom-container'>
          <Link
            to={`mailto:${props.feedbackData.userEmail}?subject=Ответ на Ваше обращение ${props.feedbackData.date}, ${props.feedbackData.feedbackTime} (School Web Tools)&body=Ваше сообщение:<br>"${props.feedbackData.userMessage}"<br>`}
            className='button-link feedback-staff-feedback-email-button-link'
          >
            <button className='feedback-staff-feedback-email-button'>
              <EmailIMG className='img white-img' />
            </button>
          </Link>
          <button
            className='feedback-staff-feedback-issue-solved-button'
            onClick={(event) =>
              handleIssueSolvedButtonClick(event, props.feedbackData.id)
            }
          >
            <DoneIMG className='img white-img' />
          </button>
        </div>
      </div>
    </div>
  );
}
