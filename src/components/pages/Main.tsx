import { Link } from 'react-router-dom'
import '../../index.css'

export function MainPage() {
    return (
        <div className='page'>
            <div className='container'>
                <h1 className='container-title'>SchoolWebTools</h1>
                <Link
                    to='data_sending'
                    className='button-link'
                >
                    <button>
                    Отправка данных
                    </button>
                </Link>
            </div>
        </div>
    );
}

