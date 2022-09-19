import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../../design/components/Navbar"
import MarvelPages from '../pages/MarvelPages'
import DcPages from '../pages/DcPages'
import HeroPage from "../pages/HeroPage"
import InicioPage from "../pages/InicioPage"


const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
        <Routes>
    <Route path="inicio" element={<InicioPage />} />
    <Route path="marvel" element={<MarvelPages />} />
    <Route path="dc" element={<DcPages />} />
    
    <Route path="heroes/:heroId" element={<HeroPage />}/>
    <Route path="/" element={<Navigate  to="/inicio" />} />
</Routes>
    </>

  )
}

export default HeroesRoutes