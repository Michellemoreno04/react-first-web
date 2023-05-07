const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const connection = require('express-myconnection') //este es algo aparte que se tiene que instalar para hacer alka conection



const app = express()
app.use(cors());
app.set('port',process.env.PORT || 9000)      //ESTE ES EL PUERTO 
const db_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    contraseña: 'primerproyecto1',
    database:'db_primer_proyecto'
}

app.use(cors());
app.use(express.json()) // esto es muy importante para que express pueda traer info en json 

// middlerwaes**********************************************
app.use(connection(mysql,db_options,'single'))

app.post('/',(req,res)=>{ // esto es una ruta
    res.send({ saludo:"Hola desde el servidor!"} ) // con el send le mandamos mensajes al servidor
    
})

app.post('/api',(req,res)=>{
    console.log(req.body)
    res.send({ saludo:"Hola desde el servidor!"} ) // esta es otra forma de mandale mensaje al servidor
    
})

 // Conexion a la base de datos
app.connect((err) => {
    if (err) throw err 
    else {
        console.log("la conexión funcionaaaa")
    }
})

 db_options.query('SELECT * from usuarios',(error,respuesta)=>{
     if(error) throw error
    
    console.log("conexcion establesida ")
 })

app.listen(app.get('port'),()=>{
    console.log("el servidor esta corriendo en el puerto",app.get('port'))
  
})

 

