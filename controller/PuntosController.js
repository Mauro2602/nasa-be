const Puntos = require('../database/model/Punto')

//Metodo que permite crear un usuario
const create = async (req, res) => {
    try {
          // Extrae datos específicos del cuerpo de la solicitud (si están presentes)
        const data10 = req.body.id;
        const data11 = req.body.distance;
    
      

        const result =   await Puntos.create({
            Id: data10,
            Distance: data11
           
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
    const result = await Puntos.find({Id: req.query.id});
    // Utiliza Mongoose para buscar el documento por su Id
    return res.status(200).json({
        success: true,
        body: result,
      });
    } catch (error) {
        console.error(error);
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