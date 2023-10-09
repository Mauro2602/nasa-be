
const User = require('../database/model/User');

//Metodo que permite crear un usuario
const create = async (req, res) => {
    try {
          // Extrae datos específicos del cuerpo de la solicitud (si están presentes)
        const data = req.body.Name;
        const data1 = req.body.emailuser;
        const data2 = req.body.LocalitationUser;
        const result =   await User.create({
            Name: data,
            Email: data1,
            Localitation: data2
        });
        console.log(result);
        
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
    const result = await User.find({});
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