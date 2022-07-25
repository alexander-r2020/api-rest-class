const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user';
        this.categoriaPath = '/api/category'
        this.productoPath = '/api/product'

        //conectar base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Rutas de aplicacion
        this.routes()

    }
    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'));
        this.app.use(this.categoriaPath,require('../routes/categorias'));
        this.app.use(this.productoPath,require('../routes/productos'));
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor corriendo", this.port);
        })
    }
} 

module.exports = Server;