import { ReactComponent as AttachFileIMG } from '../../IMG/attach_file_img.svg';

export function AttachFileSquareButton({ onChange }: any) {
  return (
    <label className='attach-file-square-button'>
      <AttachFileIMG className='attach-file-img' />
      <input type='file' onChange={onChange} />
    </label>
  );
}
