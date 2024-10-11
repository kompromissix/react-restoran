import Banner from "./banner/Banner"
import AboutTheRestaurant from "./AboutTheRestaurant/AboutTheRestaurant"
import Menu from "./Menu/Menu"
import Pupmenu from "./Pupmenu/Pupmenu"
import Nav from '../nav/nav.jsx'
function Main() {
    return (
        <>  
            <Nav />
            <main>
                <Banner />
                <AboutTheRestaurant/>
                <Menu/>
                <Pupmenu />
            </main>
        </>
    )
}

export default Main