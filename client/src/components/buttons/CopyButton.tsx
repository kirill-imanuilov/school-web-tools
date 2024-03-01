import { useState } from 'react';
import { ReactComponent as ContentCopyIMG } from '../../IMG/content_copy_img.svg';
import { ReactComponent as DoneIMG } from '../../IMG/done_img.svg';
import { AnimatePresence, motion } from 'framer-motion';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  function handleCopyButtonClick() {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(text);
      } catch (e) {
        alert('Возникла ошибка');
        console.log(e);
      }
    } else {
      alert('Эта функция не поддерживается в вашем браузере');
    }
    setIsCopied(true);
  }

  const MotionContentCopyIMG = motion(ContentCopyIMG);
  const MotionDoneIMG = motion(DoneIMG);

  return (
    <button className='link-copy-button' onClick={handleCopyButtonClick}>
      <AnimatePresence initial={false}>
        {!isCopied && (
          <MotionContentCopyIMG
            className='img white-img'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {isCopied && (
          <MotionDoneIMG
            className='img white-img'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </button>
  );
}
