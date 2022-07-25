const { Router }=require('express');
const UploadController = require('../controllers/upload')
const { check } = require('express-validator');
const Validator = require('../middlewares/validar-campos');
const ValidatorF = require('../middlewares/validar-archivo');


const router = Router();

router.put('/:id',[
    check('id','No es un id valido de mongo').isMongoId(),
    ValidatorF.validateFile,
    Validator.validateFields
    
],UploadController.updateUploads);


module.exports=router;