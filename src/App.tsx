import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PlanetaryPage from "./pages/PlanetaryPage"
import GuessPage from "./pages/GuessPage"
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<PlanetaryPage/>}/>
          <Route path="/guess" element={<GuessPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}