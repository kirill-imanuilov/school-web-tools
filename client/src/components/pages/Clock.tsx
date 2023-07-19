import { Link } from 'react-router-dom';
import '../../index.css';
import { Clock } from '../Clock';
import { BackButton } from '../buttons/BackButton';

export function ClockPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Часы</h1>
        <div className='container-content'>
          <Clock />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
