import '../index.css';
import { AttachFileSquareButton } from './buttons/AttachFileSquareButton';

export function DataSendingForm() {
  const handleAttachFileChange = () => {};

  return (
    <div className='data-sending-form'>
      <input
        type='email'
        placeholder='E-mail'
        className='data-sending-form-item data-sending-form-input-email'
      />
      <textarea
        placeholder='Сообщение'
        className='data-sending-form-item data-sending-form-input-message'
      />
      <div className='data-sending-form-bottom-container'>
        <AttachFileSquareButton onChange={handleAttachFileChange} />
        <button type='submit'>Отправить</button>
      </div>
    </div>
  );
}
