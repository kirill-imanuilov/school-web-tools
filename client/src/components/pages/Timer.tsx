import { Link } from 'react-router-dom';
import '../../index.css';
import { Timer } from '../Timer';
import { BackButton } from '../buttons/BackButton';

export function TimerPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Таймер</h1>
        <div className='container-content'>
          <Timer />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
