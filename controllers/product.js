const Producto = require('../models/producto');
const httpStatus = require('../helpers/httpStatus');
const httpResponses = require("../constants/httpResponses");

class ProductController{
    static async getAllProduct(req,res){
        let producto;
        try{
            producto = await Producto.find({estado:true}).populate('categoria','nombre')
        } catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR
              });
        }
        return res.status(httpStatus.OK).json({
            producto,
          });
       
    }
    static async getProductId(req,res){

        const { id } = req.params
        let producto;
        try{
            producto = await Producto.findById(id).populate('categoria','nombre')
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
              });
        }
        return res.status(httpStatus.OK).json({
            producto
          });
    }
    static async createProduct(req,res){

        const {nombre,precio,descripcion,categoria} = req.body
        let producto;
        try{
         producto = new Producto( {nombre,precio,descripcion,categoria} );
        await producto.save();
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
              });
        }

        return res.status(httpStatus.CREATED).send({
            msg: "the Product created succesfully",
          });
    }
    static async updateProduct(req,res){
        const { id } = req.params
        const {_id,...productos} = req.body
        let producto;
        try{
            producto = await Producto.findByIdAndUpdate(id,productos,{new:true});
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
              });
        }
        return res.status(httpStatus.OK).json({
            msg: "Product was updated successfully",
            data: {
              producto
            },
          });
       
    }
    static async deleteProduct(req,res){

        const { id } = req.params
        try{
            const producto = await Producto.findByIdAndUpdate(id,{estado:false})
        }catch(e){
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
                msg: httpResponses.RESPONSE_INTERNAL_SERVER_ERROR,
              });
        }
        return res.status(httpStatus.OK).json({
            msg: "Product was deleted successfully",
          }); 
    }
  
}

module.exports = ProductController;