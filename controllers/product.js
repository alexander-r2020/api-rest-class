const Producto = require('../models/producto');

class ProductController{
    static async getAllProduct(req,res){

        const allProducto = await Producto.find({estado:true}).populate('categoria','nombre')
        res.json(allProducto)
       
    }
    static async getProductId(req,res){

        res.send('all Product')
       
    }
    static async createProduct(req,res){

        const {nombre,precio,descripcion,categoria} = req.body
        const producto = new Producto( {nombre,precio,descripcion,categoria} );
        await producto.save();

        res.json({
            producto
        })
    }
    static async updateProduct(req,res){
        const { id } = req.params
        const {_id,...productos} = req.body
        
        const producto = await Producto.findByIdAndUpdate(id,productos,{new:true});
        res.json({
            producto
        })
       
    }
    static async deleteProduct(req,res){

        const { id } = req.params

        const producto = await Producto.findByIdAndUpdate(id,{estado:false})

        res.json({
            producto
        })
       
    }
  
}

module.exports = ProductController;