import { Link } from 'react-router-dom';
import '../../index.css';

export function TimerPage() {
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
                    Таймер
                </h1>
                <div
                    className='container-content'
                >
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

