const Voluntario = require('../database/model/Alerta');

//Metodo que permite crear un usuario
const create = async (req, res) => {
    try {
          // Extrae datos específicos del cuerpo de la solicitud (si están presentes)
        const data7 = req.body.location;
        const data8 = req.body.description;
        const data9 = req.body.intensity;
      

        const result =   await Voluntario.create({
            Location: data7,
            Description: data8,
            Intensity: data9
           
        });
      return res.status(200).json({
        success: true,
        body: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        body: error.message,
      });
    }
};


const getData = async (req, res) => {
  try {
    const result = await Voluntario.find({});
    return res.status(200).json({
      success: true,
      body: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      body: error.message,
    });
  }
}

module.exports = {
    create,
    getData
}