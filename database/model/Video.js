//Importaciones
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    Tittle_es: 
    {
        type: String,
        required: [true, 'Ingresar Titulo'],
    },
    Description_es: 
    {
        type: String,
        required: [true, 'Ingresar Descripcion']
    },
    Url_es: 
    {
        type: String,
        required: [true, 'Ingresar URL']
    },
    Tittle_en: 
    {
        type: String,
        required: [true, 'Enter Title'],
    },
    Description_en: 
    {
        type: String,
        required: [true, 'Enter Description']
    },
    Url_en: 
    {
        type: String,
        required: [true, 'Enter URL']
    }
    
});
userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });
module.exports = mongoose.model('Video', userSchema);
