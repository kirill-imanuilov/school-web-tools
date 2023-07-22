import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  buttonName: string;
}

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link to={props.to} className='button-link'>
      <button>{props.buttonName}</button>
    </Link>
  );
}
