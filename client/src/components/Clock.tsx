import { useState, useEffect } from 'react';
import '../index.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { ReactComponent as FullScreenIMG } from '../IMG/fullscreen_img.svg';

export function Clock() {
  const fullScreenHandle = useFullScreenHandle();

  const [date, setDate] = useState(new Date());
  const [clockHours, setClockHours] = useState(date.getHours());
  const [clockMinutes, setClockMinutes] = useState(date.getMinutes());
  const [clockSeconds, setClockSeconds] = useState(date.getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    setClockHours(date.getHours());
    setClockMinutes(date.getMinutes());
    setClockSeconds(date.getSeconds());
    return () => clearInterval(interval);
  });

  return (
    <div className='clock'>
      <FullScreen className='clock-values' handle={fullScreenHandle}>
        <div>
          {`${clockHours}`.length === 1 && 0}
          {clockHours}
        </div>
        :
        <div>
          {`${clockMinutes}`.length === 1 && 0}
          {clockMinutes}
        </div>
        :
        <div>
          {`${clockSeconds}`.length === 1 && 0}
          {clockSeconds}
        </div>
      </FullScreen>
      <div className='clock-buttons'>
        <button className='clock-button' onClick={fullScreenHandle.enter}>
          <FullScreenIMG className='fullscreen-img' />
        </button>
      </div>
    </div>
  );
}
