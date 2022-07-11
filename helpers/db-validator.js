const Rol= require('../models/rol')
const Usuario = require('../models/usuario')

const validateRol = async(rol='')=>{
    const existeRol = await Rol.findOne({rol});
    if(!existeRol){
        throw new Error('El Rol no existe')
    }
}
const validateEmail = async(correo='')=>{
    const existeCorreo = await Usuario.findOne({correo});
    if(existeCorreo){
        throw new Error('El email ya se encuentra registrado')
    }
} 
const validateId = async( id )=>{
    const existeUser = await Usuario.findById(id);
    if(!existeUser){
        throw new Error('El usuario no existe')
    }
} 
module.exports = {
    validateRol,
    validateEmail,
    validateId
}