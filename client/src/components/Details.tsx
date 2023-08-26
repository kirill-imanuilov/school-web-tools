import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface DetailsProps {
  title: string;
  children: any;
}

export function Details(props: DetailsProps) {
  const [isShow, setIsShow] = useState(false);
  return (
    <AnimatePresence>
      <div
        className='details'
        onClick={() => setIsShow((prev) => !prev)}
      >
        <div className='details-title'>{props.title}</div>
        {isShow && (
          <motion.div
            className='details-content'
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.1 }}
          >
            {props.children}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
