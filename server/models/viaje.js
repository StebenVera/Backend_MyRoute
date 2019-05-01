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
    },
    distancia:{
        type:String,
        required:[true,'La distancia es necesaria']
    },
    tiempo:{
        type:String,
        required:[true,'El tiempo es necesario']
    },
    tarifa:{
        type:String,
        required:[true,'La tarifa es necesaria']
    },
    placa:{
        type:String,
        required:[true,'La placa es necesaria']
    }

})

module.exports = mongoose.model('Viaje',viajesShema)