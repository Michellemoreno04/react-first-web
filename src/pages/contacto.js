import React, { useEffect } from "react"
import { Boton1 } from "../Menu_navegacion"
import { useState } from "react"




export function Contacto(){
    const [datos,setdatos] = useState({
        nombre: "",
        telephono:"",
        email:"",
    })

   const obtenerValor = (e) =>{
  setdatos({
    ...datos,
    [e.target.name] : e.target.value
   
})
}
 const enviarDatos = (e) =>{
 e.preventDefault() //esto hace que la pagina no se recarge *******************************************
 let usuarios = datos.nombre + " " + datos.telephono + " " + datos.email
 let user = {usuarios} // Esto simpre debe de ir en {} si no da error de syntaxisc

let users = JSON.stringify(user)
fetch("http://localhost:9000/api",{
method: 'POST',
headers: {
'Content-Type': 'application/json'  //  se tiene que especificar el tipo de contenido que se envia en http
                                        //si no se pone esto van aparecer {} vacios 
},
body: users,
})

}

    return( <div>
 
    <h1>Contacto</h1>
    <form className="form-contacto"  onSubmit={enviarDatos}>
    <h1>Contacto</h1> 
        <input  className="input-contacto" 
                 placeholder="Nombre"  
                 type="text"
                name="nombre"
                 onChange={obtenerValor}

                  />
                 
        <input className="input-contacto"  
                 placeholder="Numero de telefono" 
                 type="number"
                 name="telephono"
                 onChange={obtenerValor}

                 /> 
                
        <input  className="input-contacto" 
                 placeholder="Gmail" 
                 type="email"
                 name="email"
                onChange={obtenerValor}
                
                />

           <button className="btn-contacto" onClick={enviarDatos} >Enviar</button>
           
<br/><br/>
     
    </form>

    
    </div>
    )
}



