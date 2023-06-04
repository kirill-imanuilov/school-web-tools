import '../index.css'
import { ReactComponent as AttachFileIMG } from '../attach_file_img.svg'

export function DataSendingForm() {
    return (
        <div className='data-sending-form'>
            <input
                type='email'
                placeholder='E-mail'
                className='data-sending-form-item data-sending-form-input-email'/>
            <textarea
                placeholder='Сообщение'
                className='data-sending-form-item data-sending-form-input-message'/>
            <div className='data-sending-form-bottom-container'>
                <label
                    className='data-sending-form-item data-sending-form-input-file-label'
                >
                    <AttachFileIMG className='attach-file-img'/>
                    <input
                        type='file'
                        className='data-sending-form-input-file'/>
                </label>
                <button
                    type='submit'
                    className='data-sending-form-submit-button'
                >
                    Отправить
                </button>
            </div>
        </div>
    )
}

