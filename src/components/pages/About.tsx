import { Link } from 'react-router-dom';
import '../../index.css';

export function AboutPage() {
    return (
        <div className='page'>
            <div className='container'>
                <h1 className='container-title'>О сайте</h1>
                <div className='container-content'>
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

