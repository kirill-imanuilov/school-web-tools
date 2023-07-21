import { LostThingsFound } from '../LostThingsFound';
import { BackButton } from '../buttons/BackButton';

export function LostThingsFoundPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Я нашёл вещь</h1>
        <div className='container-content'>
          <LostThingsFound />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
