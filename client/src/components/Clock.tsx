import { useState, useEffect } from 'react';
import '../index.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { ReactComponent as FullScreenIMG } from '../IMG/fullscreen_img.svg';
import { ReactComponent as DarkModeIMG } from '../IMG/dark_mode_img.svg';
import { ReactComponent as LightModeIMG } from '../IMG/light_mode_img.svg';
import { Switch } from './Switch';

export function Clock() {
  const [mode, setMode] = useState('light');
  const [showSeconds, setShowSeconds] = useState(true);

  const handleModeButtonClick = () => {
    if (mode === 'dark') {
      setMode('light');
    } else if (mode === 'light') {
      setMode('dark');
    }
  };

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

  const handleSwitchClick = (state: boolean, setState: any) => {
    setState(!state);
  };

  return (
    <div className='clock'>
      <div className={`clock-values clock-values-${mode}`}>
        <FullScreen
          className={`clock-values-time clock-values-time-${mode}`}
          handle={fullScreenHandle}
        >
          <div>
            {`${clockHours}`.length === 1 && 0}
            {clockHours}
          </div>
          :
          <div>
            {`${clockMinutes}`.length === 1 && 0}
            {clockMinutes}
          </div>
          {showSeconds && ':'}
          {showSeconds && (
            <div>
              {`${clockSeconds}`.length === 1 && 0}
              {clockSeconds}
            </div>
          )}
        </FullScreen>
        <div className='clock-values-date'>
          {`${date.getDate()}`.length === 1 && 0}
          {date.getDate()}.{`${date.getMonth() + 1}`.length === 1 && 0}
          {date.getMonth() + 1}.{date.getFullYear()}
        </div>
      </div>
      <div className='clock-buttons'>
        <button className='clock-button' onClick={fullScreenHandle.enter}>
          <FullScreenIMG className='img white-img' />
        </button>
        <button className='clock-button' onClick={handleModeButtonClick}>
          {mode === 'light' && <DarkModeIMG className='img white-img' />}
          {mode === 'dark' && <LightModeIMG className='img white-img' />}
        </button>
      </div>
      <div className='switch-container'>
        <div className='switch-container-text'>Показывать секунды</div>
        <div>
          <Switch
            state={showSeconds}
            handleClick={() => {
              handleSwitchClick(showSeconds, setShowSeconds);
            }}
          />
        </div>
      </div>
    </div>
  );
}
