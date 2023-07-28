import { Link } from 'react-router-dom';
import { UsefulMaterialsLearningSitesInterface } from '../models';
import { LinkCopyButton } from './buttons/LinkCopyButton';

interface UsefulMaterialsLearningSitesItemsProps {
  usefulMaterialsLearningSitesItem: UsefulMaterialsLearningSitesInterface;
}

export function UsefulMaterialsLearningSitesItems(
  props: UsefulMaterialsLearningSitesItemsProps
) {
  return (
    <div className='useful-materials-item'>
      <Link
        className='button-link useful-materials-button-link'
        to={props.usefulMaterialsLearningSitesItem.url}
      >
        <button className='useful-materials-link-button'>
          {props.usefulMaterialsLearningSitesItem.name}
        </button>
      </Link>
      <LinkCopyButton url={props.usefulMaterialsLearningSitesItem.url} />
    </div>
  );
}
