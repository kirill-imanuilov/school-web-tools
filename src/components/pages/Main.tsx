import { Link } from 'react-router-dom';
import '../../index.css';

export function MainPage() {
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
                    School Web Tools
                </h1>
                <div
                    className='container-content'
                >
                    <Link
                        to='data_sending'
                        className='button-link'
                    >
                        <button>
                            Отправка данных
                        </button>
                    </Link>
                    <Link
                        to='useful_materials'
                        className='button-link'
                    >
                        <button>
                            Полезные материалы
                        </button>
                    </Link>
                    <Link
                        to='for_teachers'
                        className='button-link'
                    >
                        <button>
                            Для учителей
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
