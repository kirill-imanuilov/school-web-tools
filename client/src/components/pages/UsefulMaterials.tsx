import { Link } from 'react-router-dom';
import '../../index.css';
import { BackButton } from '../buttons/BackButton';

export function UsefulMaterialsPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Полезные материалы</h1>
        <div className='container-content'>
          <Link to='learning_sites/' className='button-link'>
            <button>Учебные сайты</button>
          </Link>
          <Link to='school_bell_schedule/' className='button-link'>
            <button>Расписание звонков</button>
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
