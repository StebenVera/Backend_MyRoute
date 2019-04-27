const mongoose = require('mongoose')

let Shema = mongoose.Schema;

let viajesShema = new Shema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    fecha:{
        type:Date,
        required:[true,'El correo es necesario']
    },
    hora:{
        type:String,
        required:[true,'El password es necesario']
    },
    nombreConductor:{
        type:String,
        required:[true,'El nombre del conductor es necesario']
    }
})

module.exports = mongoose.model('Viaje',viajesShema)