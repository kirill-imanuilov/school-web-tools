import { useState } from 'react';
import { ReactComponent as ContentCopyIMG } from '../IMG/content_copy_img.svg';
import { ReactComponent as DoneIMG } from '../IMG/done_img.svg';

interface UsefulMaterialsCopyButtonProps {
  url: string;
}

export function UsefulMaterialsCopyButton({
  url,
}: UsefulMaterialsCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  function handleCopyButtonClick() {
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
    <button
      className='useful-materials-copy-button'
      onClick={handleCopyButtonClick}
    >
      {!isCopied && <ContentCopyIMG className='content-copy-img' />}
      {isCopied && <DoneIMG className='done-img' />}
    </button>
  );
}
