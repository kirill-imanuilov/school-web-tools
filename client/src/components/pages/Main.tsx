import '../../index.css';
import { ButtonLink } from '../buttons/ButtonLink';

export function MainPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>School Web Tools</h1>
        <div className='container-content'>
          <ButtonLink to='data_sending' buttonName='Отправка данных' />
          <ButtonLink to='time' buttonName='Время' />
          <ButtonLink to='useful_materials' buttonName='Полезные материалы' />
          <ButtonLink to='lost_things' buttonName='Потерянные вещи' />
          <ButtonLink to='for_teachers' buttonName='Для учителей' />
          <ButtonLink to='about' buttonName='О сайте' />
        </div>
      </div>
    </div>
  );
}
