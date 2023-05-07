import React from "react";
import {BrowserRouter as Router,Route, Routes,Switch } from "react-router-dom";
import './App.css';
import {Login} from "./pages/login";
import {About} from "./pages/about";
import {Contacto} from "./pages/contacto";
import {Informacion} from "./pages/informacion"
import {Navegation} from "./Menu_navegacion"
import {Componentes} from "./Componentes"



 export  const Page = () => {
  return(<div>
<Router>
<Navegation/>
 <Routes>
 
 <Route path="/" element={<Componentes/>} />
    <Route path="/menu" element={<About/>} />
    <Route path="/contacto" element={<Contacto/>} />
    <Route path="/informacion" element={<Informacion/>} />
    <Route path="/login" element={<Login/>} />
    
  </Routes>
 
</Router>
</div>
  )
 
}
