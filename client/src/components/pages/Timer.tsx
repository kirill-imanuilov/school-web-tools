import { Link } from 'react-router-dom';
import '../../index.css';
import { Timer } from '../Timer';

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
                    <Timer/>
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

