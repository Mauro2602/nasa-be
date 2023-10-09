//Importaciones
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    Id: 
    {
        type: String,
        required: [true, 'Ingresar Id del usuario'],
    },
    Distance: 
    {
        type: Number,
        required: [true, 'Ingresar la distancia']
    }
    
});
userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Punto', userSchema);
