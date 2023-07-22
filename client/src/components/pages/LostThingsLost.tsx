import { BackButton } from '../buttons/BackButton';

export function LostThingsLostPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Я потерял вещь</h1>
        <div className='container-content'>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
