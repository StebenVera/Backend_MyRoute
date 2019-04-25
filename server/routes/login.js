const express = require('express')

const app = express()

const Usuario = require('../models/usuario')

const bcrypt = require('bcrypt')

app.post('/login',(req,res)=>{

    let body = req.body

    Usuario.findOne({correo:body.correo},(err,usuarioDB)=>{
        if(err){
            return res.status(500).json({
                estado:0,
                err
            })
        }
        if(!usuarioDB){
            return res.status(400).json({
                estado:0,
                mensaje:"Usuario o Contraseña Incorrecta"
            })
        }

        if(!bcrypt.compareSync(body.password,usuarioDB.password)){
            return res.status(400).json({
                estado:0,
                mensaje:"Usuario o Contraseña Incorrecta"
            })
        }
        res.json(
            {
                estado:1,
                usuario: usuarioDB,
                mensaje:"Bienvenidos"
            }

        )
    })


})

module.exports = app;