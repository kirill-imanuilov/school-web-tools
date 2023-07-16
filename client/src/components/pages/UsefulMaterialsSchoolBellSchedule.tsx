import { Link } from 'react-router-dom';
import '../../index.css';

export function UsefulMaterialsSchoolBellSchedulePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Расписание звонков</h1>
        <div className='container-content'>
          <Link to='/useful_materials/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
