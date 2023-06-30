import { useState, useEffect } from 'react';
import '../index.css';
import { ReactComponent as StartIMG } from '../IMG/start_img.svg';
import { ReactComponent as PauseIMG } from '../IMG/pause_img.svg';
import { ReactComponent as StopIMG } from '../IMG/stop_img.svg';

export function Stopwatch() {
  const [stopwatchHours, setStopwatchHours] = useState(23);
  const [stopwatchMinutes, setStopwatchMinutes] = useState(59);
  const [stopwatchSeconds, setStopwatchSeconds] = useState(58);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    if (!isStopped && !isPaused) {
      if (
        isStarted &&
        (stopwatchHours < 23 || stopwatchMinutes < 59 || stopwatchSeconds < 59)
      ) {
        setTimeout(() => {
          increaseStopwatchSeconds();
        }, 1000);
      }
      if (
        stopwatchHours === 23 &&
        stopwatchMinutes === 59 &&
        stopwatchSeconds === 59
      ) {
        handleStopButtonClick();
        alert('Достигнуто максимальное значение');
      }
    }
  });

  const handleStartButtonClick = () => {
    setIsStarted(true);
    setIsPaused(false);
    setIsStopped(false);
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

    setStopwatchHours(0);
    setStopwatchMinutes(0);
    setStopwatchSeconds(0);
  };

  const increaseStopwatchHours = () => {
    if (stopwatchHours < 23) {
      setStopwatchHours((prev) => prev + 1);
    }
  };

  const increaseStopwatchMinutes = () => {
    if (stopwatchMinutes === 59) {
      if (stopwatchHours < 23) {
        increaseStopwatchHours();
        setStopwatchMinutes(0);
      }
    } else {
      setStopwatchMinutes((prev) => prev + 1);
    }
  };

  const increaseStopwatchSeconds = () => {
    if (stopwatchSeconds === 59) {
      if (stopwatchHours < 23 || stopwatchMinutes < 59) {
        increaseStopwatchMinutes();
        setStopwatchSeconds(0);
      }
    } else {
      setStopwatchSeconds((prev) => prev + 1);
    }
  };

  return (
    <div className='stopwatch'>
      <div className='stopwatch-values'>
        <div className='stopwatch-item'>
          {`${stopwatchHours}`.length === 1 && 0}
          {stopwatchHours}
        </div>
        :
        <div className='stopwatch-item'>
          {`${stopwatchMinutes}`.length === 1 && 0}
          {stopwatchMinutes}
        </div>
        :
        <div className='stopwatch-item'>
          {`${stopwatchSeconds}`.length === 1 && 0}
          {stopwatchSeconds}
        </div>
      </div>
      <div className='stopwatch-buttons'>
        {(isPaused || isStopped) && (
          <button className='stopwatch-button' onClick={handleStartButtonClick}>
            <StartIMG className='stopwatch-button-img' />
          </button>
        )}
        {isStarted && (
          <button className='stopwatch-button' onClick={handlePauseButtonClick}>
            <PauseIMG className='stopwatch-button-img' />
          </button>
        )}
        {isPaused && (
          <button className='stopwatch-button' onClick={handleStopButtonClick}>
            <StopIMG className='stopwatch-button-img' />
          </button>
        )}
      </div>
    </div>
  );
}
