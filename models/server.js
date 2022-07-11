const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/user';

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
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Servidor corriendo", this.port);
        })
    }
} 

module.exports = Server;