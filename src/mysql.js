
const mysql = require('mysql')


const conection = mysql.createConnection({
    host: "localhost",
    user: "michelle",
    password: "primerproyecto1",
    database: "db_primer_proyecto" //este es el nombre de la base de datos que tengo en phpmyadmin

})

// Aquí se va a hacer la conexión a la base de datos  ****************************************

conection.connect((err) => {
    if (err) throw err 
    else {
        console.log("la conexión funcionaaaa")
    }
})

// conection.query('SELECT * from usuarios',(error,respuesta)=>{
//     if(error) throw error
    
//     console.log("conexcion establesida ")
    
    
//})
// Aqui se va a añadir info a la base de datos **********************************************************

// conection.query('INSERT INTO usuarios (nombre,correo) VALUES ("michael","michael@gmail.com")',(error,resultado)=>{
//     if(error) throw error 
//     console.log("Registro agregado exitosamente! ",resultado)    
//     } )
    

    //ACTUALIZAR INFO EN LA BASE DE DATOS ***************************************************************************************************
  /* conection.query('UPDATE usuarios SET nombre="jessica",correo="jessica@gmail.com" WHERE id=0',(error,resultado)=>{
        if(error)throw error
        console.log("se ha actualizado")
        console.log(resultado)
    })*/

  
    //ELINAR INFO DE UNA BASE DE DATOS*******************************************************************
 /*   conection.query('DELETE FROM usuarios WHERE id=0 ',(error,result)=>{
        if(error)throw error
        console.log("Usuario eliminado corectamente!")
        console.log(result)
    })*/
   