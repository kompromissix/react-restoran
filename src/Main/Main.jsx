import Banner from "./banner/Banner"
import AboutTheRestaurant from "./AboutTheRestaurant/AboutTheRestaurant"
import Menu from "./Menu/Menu"
import Pupmenu from "./Pupmenu/Pupmenu"
import Nav from '../nav/nav.jsx'
import Mapkarta from "../Mapkarta/Mapkarta.jsx"
function Main() {
    return (
        <>  
            <Nav />
            <main>
                <Banner />
                <AboutTheRestaurant/>
                <Menu/>
                <Pupmenu />
                <Mapkarta/>
            </main>
        </>
    )
}

export default Main