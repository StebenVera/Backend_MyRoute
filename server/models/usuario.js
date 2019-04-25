const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');




let rolesValidos={
    values:['DRIVER_ROLE','USER_ROLE'],
    message:'{VALUE} no es un rol valido'
}

let Shema = mongoose.Schema;

let usuariosShema = new Shema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    correo:{
        type:String,
        unique:true,
        required:[true,'El correo es necesario']
    },
    password:{
        type:String,
        required:[true,'El password es necesario']
    },
    role:{
        type:String,
        default:'USER_ROLE',
        enum: rolesValidos
    }
})


usuariosShema.methods.toJSON = function(){
    let user = this
    let userObject = user.toObject()
    delete userObject.password
    return userObject
}

usuariosShema.plugin(uniqueValidator, { message: 'Error, el {PATH} debe ser unico' });
module.exports = mongoose.model('Usuario',usuariosShema)