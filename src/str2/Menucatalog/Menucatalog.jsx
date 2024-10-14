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
                    <WayToTeach {...ways[0]}/>
                    <WayToTeach {...ways[1]}/>
                    <WayToTeach {...ways[2]}/>
                    <WayToTeach {...ways[3]}/>
                </div>
                <div>
                    <WayToTeach {...ways[4]}/>
                    <WayToTeach {...ways[5]}/>
                    <WayToTeach {...ways[6]}/>
                    <WayToTeach {...ways[7]}/>
                </div>
                <div>
                    <div>
                        <WayToTeach {...ways[8]}/>
                        <WayToTeach {...ways[9]}/>
                        <WayToTeach {...ways[10]}/> 
                    </div>
                </div>
            </section>
        </>
    )
}
export default Menucatalog