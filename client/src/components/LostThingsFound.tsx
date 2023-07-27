import '../index.css';
import { ReactComponent as AddIMG } from '../IMG/add_img.svg';
import { ReactComponent as SendIMG } from '../IMG/send_img.svg';
import { AttachFileSquareButton } from './buttons/AttachFileSquareButton';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LostThingsFoundItem } from './LostThingsFoundItem';

interface lostThingFoundData {
  thingName: string;
  thingIMG: string;
  thingDetectionPlace: string;
  thingReceiptPlace: string;
  userMessage: string;
}

export function LostThingsFound() {
  const [isAdding, setIsAdding] = useState(false);

  const [thingName, setThingName] = useState('');
  const [thingIMGHTML, setThingIMGHTML] = useState('');
  const [thingIMG, setThingIMG] = useState('');
  const [thingDetectionPlace, setThingDetectionPlace] = useState('');
  const [thingReceiptPlace, setThingReceiptPlace] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const [data, setData] = useState([]);

  async function postLostThingFoundData(
    lostThingFoundData: lostThingFoundData
  ) {
    return await fetch(
      'http://localhost:8000/lost_things/found/save_lost_thing_found_data/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lostThingFoundData),
      }
    );
  }

  const fileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        resolve(e.target.result);
      };
      reader.onerror = (error: any) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleSendButtonClick = (event: any) => {
    event.preventDefault();
    setIsAdding(false);

    if (
      thingName !== '' &&
      thingIMGHTML !== '' &&
      thingIMG !== '' &&
      thingDetectionPlace !== '' &&
      thingReceiptPlace !== ''
    ) {
      const lostThingFoundData = {
        thingName: thingName,
        thingIMG: thingIMG,
        thingDetectionPlace: thingDetectionPlace,
        thingReceiptPlace: thingReceiptPlace,
        userMessage: userMessage,
      };

      postLostThingFoundData(lostThingFoundData);

      setThingName('');
      setThingIMGHTML('');
      setThingIMG('');
      setThingDetectionPlace('');
      setThingReceiptPlace('');
      setUserMessage('');
    } else {
      alert('Все поля формы, кроме сообщения/описания являются обязательными');
    }
  };

  const handleAttachThingIMGChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setThingIMGHTML(URL.createObjectURL(file));
      fileToBase64(file).then((response) => {
        setThingIMG(`${response}`);
      });
    }
  };

  async function getLostThingsFoundData() {
    return await fetch(
      'http://localhost:8000/lost_things/found/get_lost_things_found_data'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getLostThingsFoundData();
  }, []);
  // updating data
  setTimeout(() => getLostThingsFoundData(), 5000);

  return (
    <AnimatePresence>
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
        {isAdding === false &&
          data.map((lostThingFoundData, index) => (
            <LostThingsFoundItem
              lostThingFoundData={lostThingFoundData}
              key={index}
            />
          ))}
        {isAdding === true && (
          <motion.form
            className='lost-things-form'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
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
            {thingIMGHTML !== '' && (
              <div className='lost-things-form-loaded-thing-img-container'>
                <img
                  src={thingIMGHTML}
                  width='100%'
                  className='lost-things-form-loaded-thing-img'
                />
              </div>
            )}
          </motion.form>
        )}
      </div>
    </AnimatePresence>
  );
}
