
const Voluntario = require('../database/model/Volunter');

//Metodo que permite crear un usuario
const create = async (req, res) => {
    try {
          // Extrae datos específicos del cuerpo de la solicitud (si están presentes)
        const data3 = req.body.name;
        const data4 = req.body.lastName;
        const data5 = req.body.email;
        const data6 = req.body.phoneNumber;

    

        const result =   await Voluntario.create({
            name: data3,
            lastname: data4,
            email: data5,
            phone: data6
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