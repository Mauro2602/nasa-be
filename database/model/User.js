//Importaciones
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    Name: { 
        type: String,
        required: [true, 'Por favor ingrese el nombre de usuario']
    },
    Email: { 
        type: String,
        required: [true, 'Por favor ingrese el correo de usuario']
    },
    Localitation: {
        type: Object,
        required: [true, 'La ubicacion es obligatoria'],
        
    }
});
userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('user', userSchema);