import '../index.css';
import { ReactComponent as AddIMG } from '../IMG/add_img.svg';
import { ReactComponent as SendIMG } from '../IMG/send_img.svg';
import { AttachFileSquareButton } from './buttons/AttachFileSquareButton';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loading } from './Loading';
import { fileToBase64 } from './fileToBase64';
import { LostThingsLostItem } from './LostThingsLostItem';

interface lostThingLostData {
  thingName: string;
  thingIMG: string;
  thingLossPlace: string;
  userContacts: string;
  userMessage: string;
}

export function LostThingsLost() {
  const [isAdding, setIsAdding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [thingName, setThingName] = useState('');
  const [thingIMGHTML, setThingIMGHTML] = useState('');
  const [thingIMG, setThingIMG] = useState('');
  const [thingLossPlace, setThingLossPlace] = useState('');
  const [userContacts, setUserContacts] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const [data, setData] = useState([]);

  async function postLostThingLostData(lostThingLostData: lostThingLostData) {
    return await fetch(
      'http://localhost:8000/lost_things_lost/save_lost_thing_lost_data',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lostThingLostData),
      }
    );
  }

  const handleAddButtonClick = () => {
    setIsAdding(true);
  };

  const handleSendButtonClick = (event: any) => {
    event.preventDefault();

    if (thingName !== '' && userContacts !== '' && userMessage !== '') {
      setIsAdding(false);

      const lostThingLostData = {
        thingName: thingName,
        thingIMG: thingIMG,
        thingLossPlace: thingLossPlace,
        userContacts: userContacts,
        userMessage: userMessage,
      };

      postLostThingLostData(lostThingLostData);

      setThingName('');
      setThingIMGHTML('');
      setThingIMG('');
      setThingLossPlace('');
      setUserContacts('');
      setUserMessage('');
    } else {
      alert('Все поля формы, кроме фотографии и места являются обязательными');
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

  async function getLostThingsLostData() {
    return await fetch(
      'http://localhost:8000/lost_things/lost/get_lost_things_lost_data'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  // getting data when the page loads
  useEffect(() => {
    getLostThingsLostData().then(() => {
      setIsLoading(false);
    });
  }, []);
  // updating data
  setTimeout(() => getLostThingsLostData(), 5000);

  return (
    <AnimatePresence>
      <div className='lost-things'>
        {isAdding === false && (
          <button
            type='button'
            className='lost-things-add-button'
            onClick={handleAddButtonClick}
          >
            <AddIMG className='img white-img' />
          </button>
        )}
        {isAdding === false &&
          data.map((lostThingLostData, index) => (
            <LostThingsLostItem
              lostThingLostData={lostThingLostData}
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
              <SendIMG className='img white-img' />
            </button>
            <div className='lost-things-form-top-container'>
              <input
                type='text'
                className='calc-width'
                placeholder='Что Вы потеряли?'
                value={thingName}
                onChange={(event) => setThingName(event.target.value)}
              />
              <AttachFileSquareButton onChange={handleAttachThingIMGChange} />
            </div>
            <input
              type='text'
              className='calc-width'
              placeholder='Где Вы потеряли?'
              value={thingLossPlace}
              onChange={(event) => setThingLossPlace(event.target.value)}
            />
            <input
              type='text'
              className='calc-width'
              placeholder='Как с Вами связаться?'
              value={userContacts}
              onChange={(event) => setUserContacts(event.target.value)}
            />
            <textarea
              placeholder='Сообщение/описание'
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
        {isLoading === true && (
          <div className='loading-img-container'>
            <Loading />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
