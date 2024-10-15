import './Menucatalog.css'
import { ways } from './date'

function WayToTeach(Havka){
    return(
        <div className='foot'>
            <img src={Havka.img} alt="" />
            <p>{Havka.name}</p>
            <div>
                <p>{Havka.stimost}</p>
                <button type="button" className='Link-block'>В корзину</button>
            </div>
        </div>

    )
}

function Menucatalog() {
    return(
        <>
            <section className='section-food'>
                <div>
                    {ways.map((way) =>(
                        <WayToTeach {...way}/>
                    ))}
                </div> 
            </section>
        </>
    )
}
export default Menucatalog