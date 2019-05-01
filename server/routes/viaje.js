const express = require('express')
const app = express ()
const Viaje = require('../models/viaje')


app.get('/viaje',(req,res)=>{
    let body = req.body
    Viaje.find({nombre:body.nombre},(err,usuarioDb)=>{
        if(err){
            return res.status(404).json({
                estado:0,
                err
            })
        }
        Viaje.countDocuments({nombre:body.nombre},(err,contador)=>{
            res.json({
                estado:1,
                usuarioDb,
                contador,
            })
        })
        
    })
})

app.post('/viaje',(req,res)=>{
    let body = req.body
    let viaje = new Viaje({
        nombre : body.nombre,
        fecha : body.fecha,
        hora : body.hora,
        nombreConductor:body.nombreConductor,
        distancia: body.distancia,
        tiempo: body.tiempo,
        tarifa: body.tarifa
    })
    try{
        viaje.save((error,usuarioDB)=>{
            if(error){
                return res.status(400).json({
                    estado:0,
                    mensaje: error
                })
            }

            res.json({
                estado:1,
                usuarioDB,
                mensaje:"Viaje asignado Correctamente"

            })


        })
    }
    catch(error){
        res.json({
            estado:1,
            mensaje:"Ocurrio un error al intentar guardar"
        })
    }
    

})




module.exports = app