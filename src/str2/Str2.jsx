import NavStr2 from "./NavStr2/NavStr2"
import Viboredi from "./Viboredi/viboredi"
import { Router, Route, Routes } from "react-router-dom"
import Menucatalog from "./Menucatalog/Menucatalog"
import Mapkarta from "./Mapkarta/Mapkarta"
function Str2(){
    return(
        <>
            <NavStr2/>
            <Viboredi/>
            <Routes>
                <Route index element={<Menucatalog/>} />
            </Routes>
            <Mapkarta/>
        </>
    )
}
export default Str2