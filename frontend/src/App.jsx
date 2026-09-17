import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from './pages/HomePage'
import About from "./pages/AboutPage";
import Profil from "./pages/ProfilPage";
import Navbar from "./components/Navbar";

function App(){
  return(
    <div>
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
