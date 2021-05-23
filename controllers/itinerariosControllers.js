const Itinerario = require('../models/Itinerario')

const itinerariosControllers = {
    obtenerTodosLosItinerarios: async (req, res) => {
        try{
            const todosItinerarios = await Itinerario.find()
            res.json({success: true, respuesta: todosItinerarios})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    cargarUnItinerario: async (req, res)=>{
        try {
            const itinerarioACargar = new Itinerario (req.body)
            await itinerarioACargar.save()
            const todosItinerarios = await Itinerario.find()
            res.json({success: true, respuesta: todosItinerarios})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    obtenerItinerariosPorCiudad: async (req, res)=>{
        try {
           const itinerariosPorCiudad = await Itinerario.find({idCity: req.params.id}).populate({path:'comments', populate: 'userId'})
           res.json({success: true, respuesta: itinerariosPorCiudad})
        }catch(error){
            res.json({success:false, respuesta:'Server error'})
        }
    },
    obtenerUnItinerario: async (req, res) =>{
        try{
            const itinerarioPedido = await Itinerario.findOne({_id: req.params.id})
            res.json({success: true, respuesta: itinerarioPedido})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    modificarUnItinerario: async (req, res)=>{
        try{
            await Itinerario.findOneAndUpdate({_id: req.params.id}, {...req.body})
            const todosItinerarios = await Itinerario.find()
            res.json({success: true, respuesta: todosItinerarios})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    borrarUnItinerario: async (req, res)=>{
        try{
            await Itinerario.findOneAndRemove({_id: req.params.id})
            const todosItinerarios = await Itinerario.find()
            res.json({success:true, respuesta:todosItinerarios})
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    agregarUnComentario: async (req, res)=>{  
        const { _id } = req.user
        const {comment} = req.body
        try{
            const response = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$push : {comments: {userId: _id, comment} }}, {new:true}).populate({path:'comments', populate: 'userId'})
            res.json({success: true, respuesta: response})  
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    borrarUnComentario: async (req, res)=>{
        try{
            const validarUsuario = await Itinerario.findOne({ "comments._id": req.params.id, "comments.userId": req.user._id })
            if(validarUsuario){
                const itinerarioContenedor = await Itinerario.findOneAndUpdate({ "comments._id": req.params.id}, {$pull: {comments: {_id: req.params.id} }}, {new: true}).populate({path:'comments', populate: 'userId'})
                res.json({success:true, respuesta: itinerarioContenedor})
            }else{
                res.json({success: false, respuesta: 'Este usuario no puede eliminar este comentario'})
            }
        }catch{
            res.json({success: false, respuesta:'Server error'})
        }
        
    },
    editarUnComentario: async (req, res)=>{
        try{
            const validarUsuario = await Itinerario.findOne({"comments._id":req.params.id, "comments.userId": req.user._id})
            if(validarUsuario){
                const comentarioAEditar = await Itinerario.findOneAndUpdate({ "comments._id": req.params.id}, {$set: {"comments.$.comment": req.body.comment}}, {new:true}).populate({path:'comments', populate: 'userId'})
                res.json({success: true, respuesta: comentarioAEditar})
            }else{
                res.json({success: false, respuesta:'no puedes editar este comentario'})
            }
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    likearItinerario: async (req, res)=>{
        let updateUserLike;
       try{
            const validarUserLiked = await Itinerario.findOne({_id: req.params.id , userLiked: req.user._id})
            if(!validarUserLiked){
                updateUserLike = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$push : {userLiked: req.user._id }}, {new:true})
            }else{
                updateUserLike = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$pull: {userLiked: req.user._id }}, {new: true})
            }
            const editarCantidad = await Itinerario.findOneAndUpdate({_id: req.params.id}, {$set: {likes: updateUserLike.userLiked.length}}, {new:true})
            res.json({success:true, respuesta: editarCantidad.likes})
            
        }catch(error){
            res.json({success: false, respuesta:'Server error'})
        }
    },
    verificarLikes: async (req, res)=>{
        try{
            let liked = false
            let comentariosDeUsuario = []
            const validarUserLiked = await Itinerario.findOne({_id: req.params.id , userLiked: req.user._id})
            if(validarUserLiked){
                liked = true
            }
            const itinerarioComentarios = await Itinerario.findById(req.params.id)
            comentariosDeUsuario = itinerarioComentarios.comments.map(comentario => {
                if((comentario.userId).toString() == req.user._id){
                    return comentario._id
                }})
            res.json({success: true, liked, comentarios: comentariosDeUsuario})
        }catch{
            res.json({success: false, respuesta:'Server error'})
        }
    },
}

module.exports = itinerariosControllers