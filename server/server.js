//Zona de Requires
require('./config/config')

const express  = require('express')

const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose');


//---- Zona de middleware ---- //

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json()) // parse application/json

app.use(require('./routes/index')) // Archivo que tiene todas las rutas



// conexion con la bd
mongoose.connect(process.env.URLDB, {useNewUrlParser: true,useCreateIndex:true},(err,res)=>{
    if(err){
        throw new Error('No se pudo realizar la conexion con la bd')
    }
    console.log('Base de datos Online')
});


//Servido Arriba
app.listen(process.env.PORT,()=>{
    
    console.log("Escuchando por el puerto ",process.env.PORT)
})