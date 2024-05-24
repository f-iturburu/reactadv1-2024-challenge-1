import { BrowserRouter, Routes, Route} from "react-router-dom"
import { HeroesView } from "./views/HeroesView"
import { HeroDetailView } from "./views/HeroDetailView"
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from "./components/Navbar"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<HeroesView />} />
        <Route path="/:publisher" element={<HeroesView />} />
        <Route path="/hero/:heroId" element={<HeroDetailView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
