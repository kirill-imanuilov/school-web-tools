import { useState } from 'react';
import { ReactComponent as ContentCopyIMG } from '../../IMG/content_copy_img.svg';
import { ReactComponent as DoneIMG } from '../../IMG/done_img.svg';

interface LinkCopyButtonProps {
  url: string;
}

export function LinkCopyButton({ url }: LinkCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  function handleLinkCopyButtonClick() {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(url);
      } catch (e) {
        alert('Возникла ошибка');
        console.log(e);
      }
    } else {
      alert('Эта функция не поддерживается в вашем браузере');
    }
    setIsCopied(true);
  }
  return (
    <button className='link-copy-button' onClick={handleLinkCopyButtonClick}>
      {!isCopied && <ContentCopyIMG className='img white-img' />}
      {isCopied && <DoneIMG className='img white-img' />}
    </button>
  );
}
