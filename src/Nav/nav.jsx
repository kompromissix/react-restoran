import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className='NavBackground'>
                <div>
                    <Link className='Link' to='/Main'>Меню</Link>
                    <Link className='Link' to='/Str2'>Доставка</Link>
                    <Link className='Link'>Оплата</Link>
                    <Link className='Link-block'>Бронь столика</Link>
                </div>
            </nav>
        </>
    )
}

export default Nav