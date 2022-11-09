const { Router } = require('express');
const { check } = require('express-validator');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch } = require('../controllers/usuarios');
const router = Router();


router.get('/', usuariosGet); //no ejecutamos la funcion, solo le pasamos la referencia, por eso no ponemos ()

router.put('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  check('rol').custom( esRoleValido ), 
  validarCampos
], usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'La contraseña debe de tener más de 6 letras').isLength({ min:6 }),
  check('correo', 'El correo no es válido').isEmail(),
  check('correo').custom( emailExiste ),
  //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('rol').custom( esRoleValido ), //esto en realidad es esto (rol) => esRoleValido (rol) pero se puede abreviar al ser el primer argumento que se recibe del custom y el primero que se manda al esRoleValido
  validarCampos //si pasa este middleware se ejecuta el controlador
], usuariosPost); //el segundo parametro son los middlewares y el tercero el controlador

router.delete('/:id', [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  validarCampos  
], usuariosDelete);

router.patch('/', usuariosPatch);


module.exports=router;