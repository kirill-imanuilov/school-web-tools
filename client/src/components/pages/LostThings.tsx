import { Link } from 'react-router-dom';
import '../../index.css';
import { LostThings } from '../LostThings';
import { BackButton } from '../buttons/BackButton';

export function LostThingsPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Потерянные вещи</h1>
        <div className='container-content'>
          <LostThings />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
