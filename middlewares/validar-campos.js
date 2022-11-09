const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
  const errors=validationResult(req);
  if(!errors.isEmpty()){ //hay errores
    return res.status(400).json(errors); //si llega a este punto saca los errores y ya no sigue con los siguientes middleware
  }

  next(); //si llega a este punto sigue con el siguiente middleware

}


module.exports = {
  validarCampos
}