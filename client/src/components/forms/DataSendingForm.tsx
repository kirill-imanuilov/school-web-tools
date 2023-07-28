import '../../index.css';
import { AttachFileSquareButton } from '../buttons/AttachFileSquareButton';

export function DataSendingForm() {
  const handleAttachFileChange = () => {};

  return (
    <div className='data-sending-form'>
      <input type='email' className='calc-width' placeholder='E-mail' />
      <textarea placeholder='Сообщение' />
      <div className='data-sending-form-bottom-container'>
        <AttachFileSquareButton onChange={handleAttachFileChange} />
        <button type='submit'>Отправить</button>
      </div>
    </div>
  );
}
