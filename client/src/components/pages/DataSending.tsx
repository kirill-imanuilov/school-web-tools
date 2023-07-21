import '../../index.css';
import { DataSendingForm } from '../DataSendingForm';
import { BackButton } from '../buttons/BackButton';

export function DataSendingPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Отправка данных</h1>
        <div className='container-content'>
          <DataSendingForm />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
