import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { ButtonLink } from '../buttons/ButtonLink';

export function UsefulMaterialsPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Полезные материалы</h1>
        <div className='container-content'>
          <ButtonLink to='school_services/' buttonName='Школьные сервисы' />
          <ButtonLink to='learning_sites/' buttonName='Учебные сайты' />
          <ButtonLink
            to='school_bell_schedule/'
            buttonName='Расписание звонков'
          />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
