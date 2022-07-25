const { Schema, model}= require('mongoose');

const CategoriaSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre de la categoria es obligatorio'],
        unique:true
    },

});

CategoriaSchema.methods.toJSON = function(){
    const { __v,_id, ...data} = this.toObject();
    data.uid=_id
    return data;
}
module.exports = model( 'Categoria', CategoriaSchema );