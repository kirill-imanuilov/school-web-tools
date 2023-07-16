import { Link } from 'react-router-dom';
import '../../index.css';
import { UsefulMaterialsLearningSitesItems } from '../UsefulMaterialsLearningSitesItems';
import { UsefulMaterialsLearningSitesInterface } from '../../models';
import { UsefulMaterialsLearningSitesData } from '../../data/UsefulMaterialsData';

export function UsefulMaterialsLearningSitesPage() {
  const usefulMaterialsItems = UsefulMaterialsLearningSitesData.map(
    (
      usefulMaterialsItem: UsefulMaterialsLearningSitesInterface,
      index: number
    ) => (
      <UsefulMaterialsLearningSitesItems
        usefulMaterialsLearningSitesItem={usefulMaterialsItem}
        key={index}
      />
    )
  );
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Учебные сайты</h1>
        <div className='container-content'>
          <div className='useful-materials-items'>{usefulMaterialsItems}</div>
          <Link to='/useful_materials/' className='button-link'>
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
