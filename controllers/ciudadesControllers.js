const Ciudad = require('../models/Ciudad')

const ciudadesControllers = {
    obtenerTodasLasCiudades : async (req, res) => {
        try{
            const todasCiudades = await Ciudad.find()
            res.json({success: true, respuesta: todasCiudades})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    cargarUnaCiudad: async (req, res)=>{
        const { name, country, description, image } = req.body
        try {
            const ciudadAAgregar = new Ciudad ({
                name : name,
                country: country,
                description : description,
                image: image
            })
            await ciudadAAgregar.save()
            const todasCiudades = await Ciudad.find()
            res.json({success: true, respuesta: todasCiudades})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    obtenerUnaCiudad : async (req, res) =>{
        const id = req.params.id
        try{
            const ciudadPedida = await Ciudad.findOne({_id: id})
            res.json({success: true, respuesta: ciudadPedida})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    modificarUnaCiudad : async (req, res)=>{
        const id = req.params.id
        try{
            await Ciudad.findOneAndUpdate({_id: id}, {...req.body})
            const todasCiudades = await Ciudad.find()
            res.json({success: true, respuesta: todasCiudades})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    eliminarUnaCiudad : async (req, res)=>{
        const id = req.params.id
        try{
            await Ciudad.findOneAndRemove({_id: id})
            const todasCiudades = await Ciudad.find()
            res.json({success:true, respuesta:todasCiudades})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    }
}

module.exports = ciudadesControllers

