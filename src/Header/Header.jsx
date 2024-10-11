import './Header.css'
import { Link } from 'react-router-dom'
import logo from './Header-assets/logo.png'
import burger from './Header-assets/gg_menu-left.png'
import socicons from './Header-assets/soc-icons.png'
import socicons2 from './Header-assets/soc-icons2.png'
import socicons3 from './Header-assets/soc-icons3.png'
import { useState } from 'react'
import Pupmenu from '../Main/Pupmenu/Pupmenu'

function Header() {
    const [state] = useState()
    function Click(type) {
        button.style.display = "flex";
    }
    return (
        <>
            <header>
                <nav className='nav'>
                    <div>
                        <img src={logo} alt="" />
                        <button onClick={() => Click()} type="button">
                            <img src={burger} alt="" />
                        </button>
                    </div>
                    <div>
                        <a href=""><img src={socicons} alt="" /></a>
                        <a href=""><img src={socicons2} alt="" /></a>
                        <a href=""><img src={socicons3} alt="" /></a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header