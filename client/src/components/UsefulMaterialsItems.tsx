import { Link } from 'react-router-dom';
import { UsefulMaterialsInterface } from '../models';
import { UsefulMaterialsCopyButton } from './UsefulMaterialsCopyButton';

interface UsefulMaterialsItemsProps {
  usefulMaterialsItem: UsefulMaterialsInterface;
}

export function UsefulMaterialsItems(props: UsefulMaterialsItemsProps) {
  return (
    <div className='useful-materials-item'>
      <Link
        className='button-link useful-materials-button-link'
        to={props.usefulMaterialsItem.url}
      >
        <button className='useful-materials-link-button'>
          {props.usefulMaterialsItem.name}
        </button>
      </Link>
      <UsefulMaterialsCopyButton url={props.usefulMaterialsItem.url} />
    </div>
  );
}
