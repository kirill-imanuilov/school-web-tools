import '../../index.css';
import { ButtonLink } from '../buttons/ButtonLink';

export function StaffPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Для персонала</h1>
        <div className='container-content'>
          <ButtonLink
            to='coffee_delivery/'
            buttonName='Заказы (доставка кофе)'
          />
          <ButtonLink to='feedback/' buttonName='Обращения (обратная связь)' />
        </div>
      </div>
    </div>
  );
}
