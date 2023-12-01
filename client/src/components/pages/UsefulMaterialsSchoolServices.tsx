import '../../index.css';
import { UsefulMaterialsSchoolServicesItems } from '../UsefulMaterialsSchoolServicesItems';
import { UsefulMaterialsSchoolServicesInterface } from '../../models';
import { UsefulMaterialsSchoolServicesData } from '../../data/UsefulMaterialsData';
import { BackButton } from '../buttons/BackButton';

export function UsefulMaterialsSchoolServicesPage() {
  const usefulMaterialsItems = UsefulMaterialsSchoolServicesData.map(
    (
      usefulMaterialsItem: UsefulMaterialsSchoolServicesInterface,
      index: number
    ) => (
      <UsefulMaterialsSchoolServicesItems
        usefulMaterialsSchoolServicesItem={usefulMaterialsItem}
        key={index}
      />
    )
  );
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Школьные сервисы</h1>
        <div className='container-content'>
          <div className='useful-materials-items'>{usefulMaterialsItems}</div>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
