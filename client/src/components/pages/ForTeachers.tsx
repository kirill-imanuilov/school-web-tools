import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { ButtonLink } from '../buttons/ButtonLink';

export function ForTeachersPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Для учителей</h1>
        <div className='container-content'>
          <ButtonLink to='coffee_delivery/' buttonName='Доставка кофе' />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
