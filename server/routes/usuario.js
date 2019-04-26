//Zona de Requires
const express = require('express')

const app = express()

const bcrypt = require('bcrypt')

const Usuario = require('../models/usuario')




app.get('/usuario',(req,res)=>{
    Usuario.find({},(err,usuariosDb)=>{
        if(err)
        {
            return res.status(404).json({
                estado:0
            })
        }
        res.json({
            estado:1,
            usuariosDb
        })
    })
})

app.post('/usuario',(req,res)=>{
    let body = req.body
    let usuario = new Usuario({
        nombre:body.nombre,
        correo:body.correo,
        password: bcrypt.hashSync(body.password,10), //Encruytamos la contraseña
     
    })

        try{
            usuario.save((err,usuarioDb)=>{
                if(err){
                   return res.status(400).json({
                            estado:0,
                            mensaje:err.errors.correo.message
                        })
                    }
                res.json({
                    estado:1,
                    mensaje:"Usuario creado con exitó.",
                    usuarioDb
                })
            })
        }
        catch(error){
            res.json(
                {
                    estado:0,
                    mensaje:"ocurrio un error al intentar guardar"
                }
            )
        }
    
})

module.exports = app;