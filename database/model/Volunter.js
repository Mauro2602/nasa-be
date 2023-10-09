//Importaciones
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: 
    {
        type: String,
        required: [true, 'Por favor ingrese el nombre del voluntario']
    },
    lastname: 
    {
        type: String,
        required: [true, 'Por favor ingrese el apellido del voluntario']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
    },
    phone:
    {
        type: String,
        required: [true, 'El telefono es obligatorio'],
    }
});
userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Volunter', userSchema);