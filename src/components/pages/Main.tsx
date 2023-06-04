import { Link } from 'react-router-dom';
import '../../index.css';

export function MainPage() {
    return (
        <div className='page'>
            <div className='container'>
                <h1 className='container-title'>School Web Tools</h1>
                <div className='container-content'>
                    <Link
                        to='data_sending'
                        className='button-link'
                    >
                        <button>
                        Отправка данных
                        </button>
                    </Link>
                    <Link
                        to='about'
                        className='button-link'
                    >
                        <button>
                        О сайте
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

