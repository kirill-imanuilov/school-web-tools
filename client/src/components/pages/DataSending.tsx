import { Link } from 'react-router-dom';
import '../../index.css';
import { DataSendingForm } from '../DataSendingForm';

export function DataSendingPage() {
    return (
        <div
            className='page'
        >
            <div
                className='container'
            >
                <h1
                    className='container-title'
                >
                    Отправка данных
                </h1>
                <div
                    className='container-content'
                >
                    <DataSendingForm/>
                    <Link
                        to='/'
                        className='button-link'
                    >
                        <button>
                            Назад
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

