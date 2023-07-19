import { Link } from 'react-router-dom';
import '../../index.css';
import { Stopwatch } from '../Stopwatch';
import { BackButton } from '../buttons/BackButton';

export function StopwatchPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Секундомер</h1>
        <div className='container-content'>
          <Stopwatch />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
