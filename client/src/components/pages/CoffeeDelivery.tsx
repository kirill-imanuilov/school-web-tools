import '../../index.css';
import { CoffeeDeliveryForm } from '../forms/CoffeeDeliveryForm';
import { BackButton } from '../buttons/BackButton';

export function CoffeeDeliveryPage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Доставка кофе</h1>
        <div className='container-content'>
          <CoffeeDeliveryForm />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
