const { Router }=require('express');
const { check } = require('express-validator');
const { validateRol, validateEmail, validateId } = require('../helpers/db-validator');
const Validator = require('../middlewares/validar-campos');
const UserController = require('../controllers/user');
const router = Router();

router.get('/',UserController.getAllUser);
router.post('/',[
    check('nombre',"El nombre es obligatorio").not().isEmpty(),
    check('correo',"El email no es valido ").isEmail(),
    check('correo').custom( validateEmail ),
    check('password',"La contraseña debe tener mas de 6 letras").isLength({ min:6 }),
    check('rol').custom( validateRol ),
    Validator.validateFields
],UserController.createUser);
router.put('/:id',[
    check('id',"No es un ID valido").isMongoId(),
    check('id').custom(validateId),
    check('rol').custom( validateRol ),
    Validator.validateFields
],UserController.updateUser);
router.delete('/:id',[
    check('id',"No es un ID valido").isMongoId(),
    check('id').custom(validateId),
    Validator.validateFields
],UserController.deleteUser);


module.exports=router;