import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { ButtonLink } from '../buttons/ButtonLink';

export function LostThingsPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Потерянные вещи</h1>
        <div className='container-content'>
          <ButtonLink to='found/' buttonName='Я нашёл вещь' />
          <ButtonLink to='lost/' buttonName='Я потерял вещь' />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
