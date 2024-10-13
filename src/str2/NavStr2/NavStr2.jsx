import './NavStr2.css'
import img1 from './NavStr2-assets/fasolid_shopping-basket.png'
import img2 from './NavStr2-assets/mdi_account.png'

function NavStr2() {
    return(
        <>
            <nav className='NavBack'>
                <div>
                    <div>
                        <p>Личный кабинет</p>
                        <img src={img2} alt="" />
                        <img src={img1} alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavStr2