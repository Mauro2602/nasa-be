const videos = require('../database/model/Video')

//Metodo que permite crear un usuario
const create = async (req, res) => {
    try {
          // Extrae datos específicos del cuerpo de la solicitud (si están presentes)
        const data12 = req.body.tittle_es;
        const data13 = req.body.resenha_es;
        const data14 = req.body.url_es;
        const data15 = req.body.tittle_en;
        const data16 = req.body.resenha_en;
        const data17 = req.body.url_en;
    
        const result =   await videos.create({
            Tittle_es: data12,
            Description_es: data13,
            Url_es: data14,
            Tittle_en: data15,
            Description_en: data16,
            Url_en: data17
           
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
  let bodyContents;
  try {
    const terminaciones = req.query.terminaciones;

    if (!terminaciones) {
      return res.status(400).json({
        success: false,
        body: 'Debes proporcionar un valor para el parámetro "terminaciones".',
      });
    }

    const result = await videos.find({ });

    if (terminaciones === 'en') {
      bodyContents = result.map(doc => ({
        Tittle: doc.Tittle_en,
        Description: doc.Description_en,
        Url: doc.Url_en,
      }));
    } else if (terminaciones === 'es') {
      bodyContents = result.map(doc => ({
        Tittle: doc.Tittle_es,
        Description: doc.Description_es,
        Url: doc.Url_es,
      }));
    } else {
      return res.status(400).json({
        success: false,
        body: 'El valor del parámetro "terminaciones" no es válido. Debe ser "en" o "es".',
      });
    }

    return res.status(200).json({
      success: true,
      body: bodyContents,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      body: error.message,
    });
  }
};


module.exports = {
    create,
    getData
}