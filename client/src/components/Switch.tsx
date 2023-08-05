import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as Done_IMG } from '../IMG/done_img.svg';
import { ReactComponent as Close_IMG } from '../IMG/close_img.svg';

export function Switch() {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleToggleClick = () => {
    setIsSwitched((prev) => !prev);
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
            <DoneIMG
              className='img toggle-on-img'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <CloseIMG
              className='img toggle-off-img'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
