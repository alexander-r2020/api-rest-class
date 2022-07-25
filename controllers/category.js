const Categoria = require('../models/categoria');

class CategoryController{
    static async getAllCategory(req,res){

        const allcategory = await Categoria.find()
        res.json(allcategory)
    }
  
}

module.exports = CategoryController;
