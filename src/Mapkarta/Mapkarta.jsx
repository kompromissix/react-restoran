import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import { time } from './date';
import './Mapkarta.css';
import location from './Mapkarta-assets/ci_location.png'
import phone from './Mapkarta-assets/ci_phone.png'
function Timezon(Timediv) {
    return(
        <div className='timediv'>
            <div className='tim'>
                <h2>{Timediv.time}</h2>
                <p>{Timediv.timetxt}</p>
            </div>
            <div>
                <h3>{Timediv.text}</h3>
                <h3>{Timediv.gorod}</h3>
            </div>
        </div>
    )
}

function Mapkarta() {
    const defaultProps = {
        center: {
          lat: 54.68098808424518,
          lng: 20.505194470002774
        },
        zoom: 18
      };
    
    return(
        
        <>
            <div className='kontact'>
                <div>
                    <div className='AboutTheRestaurant-oglav'>
                        <p>контакты</p>
                        <hr />
                    </div>
                    <div className='mapdiv'>
                        <div className='mapdivtime'>
                            {time.map((way) =>(
                                <Timezon {...way}/>
                            ))}
                        </div>
                        <div className='absolutmap'>
                            <div>
                                <div>
                                    <div className='top-map'>
                                        <div>
                                            <img src={location} alt="" />
                                            <p>Санкт-Петербург, Северная дорога, 11 </p>
                                        </div>
                                        <div>
                                            <img src={phone} alt="" />
                                            <p>+7 (921) 777-77-77</p>
                                        </div>
                                    </div>
                                    <div className='mid-map'>
                                        <div>
                                            <h3>Время работы</h3>
                                        </div>
                                        <div>
                                            <h3>Вск-Чт</h3>
                                            <p>с 12:00 до 23:00</p>
                                        </div>
                                        <div>
                                            <h3>Пт-Сб</h3>
                                            <p>с 12:00 до 03:00</p>
                                        </div>
                                    </div>
                                    <div className='bottom-map'>
                                        <button type="button" className='Link-block'>Бронь столика</button>
                                        <button type="button" className='Link-block2'>Задать вопрос</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div className='map'>
                            <GoogleMapReact className='map' bootstrapURLKeys={{ key: "" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                                <AnyReactComponent lat={54.68098808424518} lng={20.505194470002774} text="My Marker" />
                            </GoogleMapReact>
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div>
                
            </div>
        </>
    )
}

export default Mapkarta