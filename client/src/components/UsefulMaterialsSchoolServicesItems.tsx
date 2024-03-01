import { Link } from 'react-router-dom';
import { UsefulMaterialsSchoolServicesInterface } from '../models';
import { CopyButton } from './buttons/CopyButton';

interface UsefulMaterialsSchoolServicesItemsProps {
  usefulMaterialsSchoolServicesItem: UsefulMaterialsSchoolServicesInterface;
}

export function UsefulMaterialsSchoolServicesItems(
  props: UsefulMaterialsSchoolServicesItemsProps
) {
  return (
    <div className='useful-materials-item'>
      <Link
        className='button-link useful-materials-button-link'
        to={props.usefulMaterialsSchoolServicesItem.url}
      >
        <button className='useful-materials-link-button'>
          {props.usefulMaterialsSchoolServicesItem.name}
        </button>
      </Link>
      <CopyButton url={props.usefulMaterialsSchoolServicesItem.url} />
    </div>
  );
}
