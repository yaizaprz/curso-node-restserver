const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPut, usuariosPatch } = require('../controllers/usuarios');
const router = Router();


router.get('/', usuariosGet); //no ejecutamos la funcion, solo le pasamos la referencia

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports=router;