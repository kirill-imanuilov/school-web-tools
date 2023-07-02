import { Link } from 'react-router-dom';
import '../../index.css';
import { UsefulMaterialsItems } from '../UsefulMaterialsItems';
import { UsefulMaterialsInterface } from '../../models';
import { UsefulMaterialsData } from '../../data/UsefulMaterialsData';

interface UsefulMaterialsItemsProps {
  usefulMaterialsItem: UsefulMaterialsInterface;
}

export function UsefulMaterialsPage() {
  const usefulMaterialsItems = UsefulMaterialsData.map(
    (usefulMaterialsItem, index: number) => (
      <UsefulMaterialsItems
        usefulMaterialsItem={usefulMaterialsItem}
        key={index}
      />
    )
  );
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Полезные материалы</h1>
        <div className='container-content'>
          <div className='useful-materials-items'>{usefulMaterialsItems}</div>
          <Link to='/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
