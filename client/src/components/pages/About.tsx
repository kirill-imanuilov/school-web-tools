import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { ButtonLink } from '../buttons/ButtonLink';

export function AboutPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>О сайте</h1>
        <div className='container-content'>
          <ButtonLink to='feedback/' buttonName='Обратная связь' />
          <ButtonLink to='https://github.com/kirill-imanuilov/school-web-tools.git' buttonName='Исходный код (GitHub)' />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
