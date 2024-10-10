import Banner from "./banner/Banner"
import AboutTheRestaurant from "./AboutTheRestaurant/AboutTheRestaurant"
import Menu from "./Menu/Menu"
import Pupmenu from "./Pupmenu/Pup-menu"
function Main() {
    return (
        <>
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