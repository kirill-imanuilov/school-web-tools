import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { ButtonLink } from '../buttons/ButtonLink';

export function TimePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Время</h1>
        <div className='container-content'>
          <ButtonLink to='clock/' buttonName='Часы' />
          <ButtonLink to='timer/' buttonName='Таймер' />
          <ButtonLink to='stopwatch/' buttonName='Секундомер' />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
