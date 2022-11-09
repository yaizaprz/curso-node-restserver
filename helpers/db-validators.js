const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async (rol = '') => {

  const existeRol = await Role.findOne({ rol });
  if(!existeRol){
    throw new Error(`El rol ${rol} no está registrado en la BD`);
  }

} 

//Verificar si el correo existe
const emailExiste = async (correo = '') => {
  const existeEmail = await Usuario.findOne( { correo } ); //va a buscar correo: correo pero abreviamos con correo porque es el mismo nombre
  if(existeEmail){
    throw new Error(`El correo ${correo} ya existe`);
  }
}


const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id); //va a buscar correo: correo pero abreviamos con correo porque es el mismo nombre
  if(!existeUsuario){
    throw new Error(`El ID ${id} no existe`);
  }
}


module.exports= {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId
}