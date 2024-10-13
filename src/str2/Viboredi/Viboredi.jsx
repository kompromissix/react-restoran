import './Viboredi.css'
import { Link } from 'react-router-dom'

function Viboredi() {
    return(
        <>
            <div className='vibor'>
                <div>
                    <Link className='Link2'>Завтраки</Link>
                    <Link className='Link2'>Raw</Link>
                    <Link className='Link2'>Холодные закуски</Link>
                    <Link className='Link2'>Брускетты</Link>
                    <Link className='Link2'>К вину</Link>
                    <Link className='Link2'>Салаты</Link>
                    <Link className='Link2'>Супы</Link>
                    <Link className='Link2'>Паста и ризотто</Link>
                    <Link className='Link2'>Мясо</Link>
                    <Link className='Link2'>Рыба</Link>
                    <Link className='Link2'>Grill</Link>
                    <Link className='Link2'>Мангал</Link>
                    <Link className='Link2'>Гарниры</Link>
                </div>
            </div>
        </>
    )
}

export default Viboredi