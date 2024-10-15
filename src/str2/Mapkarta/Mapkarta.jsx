import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import { time } from './date';
import './Mapkarta.css';
function Timezon(Timediv) {
    return(
        <div className='timediv'>
            <div className='tim'>
                <h2>{Timediv.time}</h2>
                <p>{Timediv.timetxt}</p>
            </div>
            <div>
                <h3>{Timediv.text}</h3>
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
                        <div>
                            <div className='absolutmap'>

                            </div>
                            <div className='map'>
                                <GoogleMapReact className='map' bootstrapURLKeys={{ key: "" }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                                    <AnyReactComponent lat={54.68098808424518} lng={20.505194470002774} text="My Marker" />
                                </GoogleMapReact>
                            </div>
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