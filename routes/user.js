const { Router }=require('express');
const { check } = require('express-validator');

const UserController = require('../controllers/user');
const router = Router();

router.get('/',UserController.getAllUser);



module.exports=router;