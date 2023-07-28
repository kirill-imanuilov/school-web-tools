import { useState, useEffect } from 'react';
import '../index.css';
import { ReactComponent as StartIMG } from '../IMG/start_img.svg';
import { ReactComponent as PauseIMG } from '../IMG/pause_img.svg';
import { ReactComponent as StopIMG } from '../IMG/stop_img.svg';
import { ReactComponent as ArrowUpIMG } from '../IMG/arrow_up_img.svg';
import { ReactComponent as ArrowDownIMG } from '../IMG/arrow_down_img.svg';

export function Timer() {
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    if (!isStopped && !isPaused) {
      if (
        isStarted &&
        (timerSeconds > 0 || timerMinutes > 0 || timerHours > 0)
      ) {
        setTimeout(() => {
          decreaseTimerSeconds();
        }, 1000);
      }
      if (timerSeconds === 0 && timerMinutes === 0 && timerHours === 0) {
        setIsStarted(false);
        setIsPaused(false);
        setIsStopped(true);
        alert('Время вышло');
      }
    }
  });

  const handleStartButtonClick = () => {
    if (timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
      alert('Установите время на таймере');
    } else {
      setIsStarted(true);
      setIsPaused(false);
      setIsStopped(false);
    }
  };

  const handlePauseButtonClick = () => {
    setIsStarted(false);
    setIsPaused(true);
    setIsStopped(false);
  };

  const handleStopButtonClick = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsStopped(true);

    setTimerHours(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
  };

  const increaseTimerHours = () => {
    if (timerHours < 23) {
      setTimerHours((prev) => prev + 1);
    }
  };

  const increaseTimerMinutes = () => {
    if (timerMinutes === 59) {
      if (timerHours < 23) {
        increaseTimerHours();
        setTimerMinutes(0);
      }
    } else {
      setTimerMinutes((prev) => prev + 1);
    }
  };

  const increaseTimerSeconds = () => {
    if (timerSeconds === 59) {
      if (timerHours < 23 || timerMinutes < 59) {
        increaseTimerMinutes();
        setTimerSeconds(0);
      }
    } else {
      setTimerSeconds((prev) => prev + 1);
    }
  };

  const decreaseTimerHours = () => {
    if (timerHours > 0) {
      setTimerHours((prev) => prev - 1);
    }
  };

  const decreaseTimerMinutes = () => {
    if (timerMinutes > 0) {
      setTimerMinutes((prev) => prev - 1);
    } else if (timerHours > 0) {
      setTimerMinutes(59);
      decreaseTimerHours();
    }
  };

  const decreaseTimerSeconds = () => {
    if (timerSeconds > 0) {
      setTimerSeconds((prev) => prev - 1);
    } else if (timerMinutes > 0 || timerHours > 0) {
      setTimerSeconds(59);
      decreaseTimerMinutes();
    }
  };

  return (
    <div className='timer'>
      {(isPaused || isStopped) && (
        <div className='set-timer-time'>
          <div className='set-timer-time-item'>
            <button className='timer-arrow-button' onClick={increaseTimerHours}>
              <ArrowUpIMG className='img timer-arrow-img' />
            </button>
            {timerHours}
            <button className='timer-arrow-button' onClick={decreaseTimerHours}>
              <ArrowDownIMG className='img timer-arrow-img' />
            </button>
          </div>
          <div className='set-timer-time-item'>
            <button
              className='timer-arrow-button'
              onClick={increaseTimerMinutes}
            >
              <ArrowUpIMG className='img timer-arrow-img' />
            </button>
            {timerMinutes}
            <button
              className='timer-arrow-button'
              onClick={decreaseTimerMinutes}
            >
              <ArrowDownIMG className='img timer-arrow-img' />
            </button>
          </div>
          <div className='set-timer-time-item'>
            <button
              className='timer-arrow-button'
              onClick={increaseTimerSeconds}
            >
              <ArrowUpIMG className='img timer-arrow-img' />
            </button>
            {timerSeconds}
            <button
              className='timer-arrow-button'
              onClick={decreaseTimerSeconds}
            >
              <ArrowDownIMG className='img timer-arrow-img' />
            </button>
          </div>
        </div>
      )}
      {isStarted && (
        <div className='timer-values'>
          <div className='timer-hours'>
            {`${timerHours}`.length === 1 && 0}
            {timerHours}
          </div>
          :
          <div className='timer-minutes'>
            {`${timerMinutes}`.length === 1 && 0}
            {timerMinutes}
          </div>
          :
          <div className='timer-seconds'>
            {`${timerSeconds}`.length === 1 && 0}
            {timerSeconds}
          </div>
        </div>
      )}
      <div className='timer-buttons'>
        {(isPaused || isStopped) && (
          <button className='timer-button' onClick={handleStartButtonClick}>
            <StartIMG className='img white-img' />
          </button>
        )}
        {isStarted && (
          <button className='timer-button' onClick={handlePauseButtonClick}>
            <PauseIMG className='img white-img' />
          </button>
        )}
        {isPaused && (
          <button className='timer-button' onClick={handleStopButtonClick}>
            <StopIMG className='img white-img' />
          </button>
        )}
      </div>
    </div>
  );
}
