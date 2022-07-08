const {Router}=require('express');
const UserController = require('../controllers/user')
const router = Router();

router.get('/',UserController.getAll);


module.exports=router;