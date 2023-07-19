import '../index.css';
import { ReactComponent as AddIMG } from '../IMG/add_img.svg';
import { ReactComponent as SendIMG } from '../IMG/send_img.svg';
import { AttachFileSquareButton } from './buttons/AttachFileSquareButton';
import { useState } from 'react';

export function LostThings() {
  const [isAdding, setIsAdding] = useState(false);

  const [thingName, setThingName] = useState('');
  const [thingIMG, setThingIMG] = useState('');
  const [thingDetectionPlace, setThingDetectionPlace] = useState('');
  const [thingReceiptPlace, setThingReceiptPlace] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleSendButtonClick = (event: any) => {
    event.preventDefault();
    setIsAdding(false);

    if (
      thingName !== '' &&
      thingIMG !== '' &&
      thingDetectionPlace !== '' &&
      thingReceiptPlace !== ''
    ) {
      const lostThingData = {
        thingName: thingName,
        thingIMG: thingIMG,
        thingDetectionPlace: thingDetectionPlace,
        thingReceiptPlace: thingReceiptPlace,
        userMessage: userMessage,
      };

      setThingName('');
      setThingIMG('');
      setThingDetectionPlace('');
      setThingReceiptPlace('');
      setUserMessage('');
    } else {
      alert('Все поля формы, кроме сообщения/описания являются обязательными');
    }
  };

  const handleAttachThingIMGChange = (event: any) => {
    if (event.target.files[0]) {
      setThingIMG(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className='lost-things'>
      {isAdding === false && (
        <button
          type='button'
          className='lost-things-add-button'
          onClick={handleAddButtonClick}
        >
          <AddIMG className='add-img' />
        </button>
      )}
      {isAdding === true && (
        <form className='lost-things-form'>
          <button
            type='submit'
            className='lost-things-send-button'
            onClick={handleSendButtonClick}
          >
            <SendIMG className='send-img' />
          </button>
          <div className='lost-things-form-top-container'>
            <input
              className='lost-things-form-item'
              placeholder='Что Вы нашли?'
              value={thingName}
              onChange={(event) => setThingName(event.target.value)}
            />
            <AttachFileSquareButton onChange={handleAttachThingIMGChange} />
          </div>
          <input
            className='lost-things-form-item'
            placeholder='Где Вы нашли?'
            value={thingDetectionPlace}
            onChange={(event) => setThingDetectionPlace(event.target.value)}
          />
          <input
            className='lost-things-form-item'
            placeholder='Где забрать владельцу?'
            value={thingReceiptPlace}
            onChange={(event) => setThingReceiptPlace(event.target.value)}
          />
          <textarea
            placeholder='Сообщение/описание'
            className='lost-things-form-item lost-things-form-input-message'
            value={userMessage}
            onChange={(event) => setUserMessage(event.target.value)}
          />
          {thingIMG !== '' && (
            <div className='lost-things-form-loaded-thing-img-container'>
              <img
                src={thingIMG}
                width='100%'
                className='lost-things-form-loaded-thing-img'
              />
            </div>
          )}
        </form>
      )}
    </div>
  );
}
