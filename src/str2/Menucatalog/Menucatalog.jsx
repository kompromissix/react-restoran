import './Menucatalog.css'
import './date.js'

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
            <section>
                <div>
                    <WayToTeach {...ways[0]}/>
                </div>
                <div></div>
                <div></div>
            </section>
        </>
    )
}
export default Menucatalog