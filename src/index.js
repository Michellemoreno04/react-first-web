import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navigation,Portada,Planes,Imagen1,Imagen2,Contenedor2,Boton1} from "./Menu_navegacion";
import {Page} from "./App"
import { Componentes } from './Componentes';
import { About } from './pages/about';
import {BrowserRouter as Router,Route, Routes,Switch } from "react-router-dom";







const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 

<React.StrictMode>
<Page/>

</React.StrictMode>


  );


