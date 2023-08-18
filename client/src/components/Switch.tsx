import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as Done_IMG } from '../IMG/done_img.svg';
import { ReactComponent as Close_IMG } from '../IMG/close_img.svg';

interface SwitchProps {
  state: boolean;
  handleClick: () => void;
}

export function Switch({ state, handleClick }: SwitchProps) {
  const [isSwitched, setIsSwitched] = useState(state);

  const handleToggleClick = () => {
    setIsSwitched((prev) => !prev);
    handleClick();
  };

  const toggleAnimation = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  const DoneIMG = motion(Done_IMG);
  const CloseIMG = motion(Close_IMG);

  return (
    <div
      className={`switch${isSwitched ? ' switch-on' : ''}`}
      onClick={handleToggleClick}
    >
      <AnimatePresence initial={false}>
        <motion.div className='toggle' layout transition={toggleAnimation}>
          {isSwitched ? (
            <DoneIMG className='img toggle-on-img' />
          ) : (
            <CloseIMG className='img toggle-off-img' />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
