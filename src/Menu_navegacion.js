import hombre from "./imagenes/hombre.png";
import computadora3 from "./imagenes/computadora3.png";
import Klipartz from "./imagenes/klipartz.com.png";
import computadora2 from "./imagenes/computadora2.png";
import owl from "./imagenes/owl.jpg"
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";


// SIEMPRE EL COMPONENTE EMPIEZA CON LETRA MAYUSCULA COMO ESTA FUNCION

export function Navegation() {
  return( 

    <nav className="navigation">
      <h1 className="logo">LOGO</h1>


      <a href="/">Home</a> 
      <a href="/contacto">Contacto</a>
      <a href="/informacion">Información</a>
      <a href="/login">Login</a> 
     
  
    </nav>
    
  )
}  


   export function Portada(){ // esta es la portada 
        return <div className="portada">
          <div className="container">
            <img className="imgPortada" src={owl}/>
</div>
     </div> 
        
    }

export function Planes(){
  return <div id="planes">
    <ul>
      <li><a href="#">plan 1</a><p>este es mi texto sobre cada uno de los planes</p></li>
      
      <li><a href="#">plan 2</a><p>este es mi texto sobre cada uno de los planes</p></li>
      <li><a href="#">plan 3</a><p>este es mi texto sobre cada uno de los planes</p></li>

    </ul>
    
   </div>
}
 export function Imagen1(){
  return <div className="imge1"> <img src="https://www.arpynet.com/wp-content/uploads/2018/07/desarrollo-web-ciencia-activa.png" className="compu1"  alt="Descricion de la imagen" />
   <img className="compu2" src={computadora3} />
   <img className="compu3" src={ computadora2} />

  
  </div>
  
}

export function Contenedor2(){
  return <div className="elige">
  <div className="hijos"><h1>elige</h1><hr/>
  <h3>Elige lo que sea mas conveniente para ti!</h3>
  <p>Todo lo que valla de acuerdo a tus ideas para que podamos crear todo un ecocistemas de informacion a tu manera y forma mas favorable.<br/><br/>
  Aqui eliges que tipo de estructura y diseño tendra tu web o aplicacion web.
  
  </p>
  
  </div>
  <div className="hijos"><h1>elige</h1><hr/>
  <h3>Elige con lo que te sientas mas comod@!</h3>
  <p>Elige todo aquel conteniodo que deseas tener en tu web con toda la informacion que deseas desde el principio hasta el final del la pagina.<br/><br/>
  Tu decides que va a contener la pagina como imagenes videos audio y todo lo que le quieras añadir ya sea en el formulario,contacto,protafolio y cada parte espesifica 
  de la web y lugar donde las quieras ubicar.
  
  
  </p>
  
  </div>
  <div className="hijos"><h1>elige</h1><hr/>
  <h3>elige lo que va  de acuerdo a tus metas</h3>
  <p>Todos aquello que desees usar para llegar al camino mas corto para alcanzar tus metas y dar a conocer tu proyecto en todo tipo de plataformas.<br/><br/>
  Aqui podras elegir como se presenta y con esta estructurado tus servicios <br/><br/>
  Tambien se puede hacer actualizaciones de contenidoaun despues de que el proyecto este culminado.
  
  </p>
  
  </div>
  </div>
}
export function Imagen2(){
  return<div className="img2">
  <img  className="hombre" src={hombre}/>
  <h1>Deja que todo todo el mundo conozca tus servicios y tu proposito con cada unode tus proyectos. </h1>
  <div className="cuadro">
 {/*imagen añadida de Klipartz*/}
    <div className="circulo"><img src={Klipartz} className="imgKlipartz"/><p>Ya elejiste tu proyecto!</p>
    <span>Vamos a ponerlo en pie! empezemos  a construir paso a paso el camino a tus metas para darte a conocer
      y llevar tu producto o servicios mas alla.<br/><br/>
       Asi puedas descanzar mientras todos conocen sobre ti, tambien tienes la facilidad de
       ir aprediendo con el tiempo como vas abansando la ruta de la publisidad mediante pasa el tiempo 
    
      
       </span>
    
    </div>
    
  </div>

  </div>
  }

  export function Boton1({texto}){
    
    return <div><button className="btn1" id="btnRojo"  >{texto} </button>
   
    
    </div>
  }

