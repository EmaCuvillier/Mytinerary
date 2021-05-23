const Actividad = require('../models/Actividad')

const actividadesControllers = {
    cargarUnaActividad: async (req, res)=>{
        try {
            const actividadACargar = new Actividad (req.body)
            await actividadACargar.save()
            const todasLasActividades = await Actividad.find()
            res.json({success: true, respuesta: todasLasActividades})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    pedirActividadesPorItinerario: async (req, res)=>{
        try {
           const actividadesPorItinerario = await Actividad.find({idItinerary: req.params.id})
           res.json({success: true, respuesta: actividadesPorItinerario})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
}

module.exports = actividadesControllers