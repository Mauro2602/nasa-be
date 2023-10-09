//Importaciones
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    Location: 
    {
        type: String,
        required: [true, 'Por favor ingrese su ubicacion']
    },
    Description: 
    {
        type: String,
        required: [true, 'Por favor ingrese la descripcion del lugar']
    },
    Intensity: {
        type: Number,
        required: [true, 'Especifique la intensidad del incendio'],
        min: 1,
        max: 10
    },
    
});
userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Alerta', userSchema);