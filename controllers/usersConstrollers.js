const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Itinerario = require('../models/Itinerario')

const userControllers ={
    cargarNuevoUsuario: async (req, res)=>{
        var {firstName, lastName, email, password, picture, country} = req.body
        const verificarMail = await User.findOne({email})
        var respuesta
        var error
        var nuevoUsuario
        password = bcryptjs.hashSync(password, 10)
        if(!verificarMail){
            try{
                nuevoUsuario = new User({firstName, lastName, email, password, picture, country})
                await nuevoUsuario.save()
                const token = jwt.sign({...nuevoUsuario}, process.env.SECRET_OR_KEY)
                respuesta = token
            }catch{
                error = 'Hubo un error en el grabado del usuario, reintente'
            }  
        }else{
            error = 'El email ya esta en uso'
        }
        res.json({success: !error ? true : false, respuesta:{token: respuesta, picture: nuevoUsuario.picture, firstName: nuevoUsuario.firstName}, error})
    },
    logearUsuario: async (req, res)=>{
        const {email, password} = req.body
        var respuesta
        var error
        const existeUsuario = await User.findOne({email})
        if(existeUsuario){
            const passwordMatch = bcryptjs.compareSync(password, existeUsuario.password)
            if(passwordMatch){
                const token =jwt.sign({...existeUsuario}, process.env.SECRET_OR_KEY)
                respuesta = token
            }else{
                error = 'Unauthorized: incorrect username or password'
            }
        }else{
            error = 'Unauthorized: incorrect username or password'
        }
        res.json({success: !error ? true : false, respuesta:!error && {token: respuesta, picture: existeUsuario.picture, firstName: existeUsuario.firstName}, error})
    },
    loginForzado: (req, res) =>{
        res.json({success: true, respuesta:{picture: req.user.picture, firstName: req.user.firstName}})
    },
    pedirInfoUsuario: async (req, res)=>{
        const validarUserLiked = await Itinerario.find({userLiked: req.user._id})
        if(validarUserLiked){
            res.json({success:true, respuesta: validarUserLiked})
        }else{
            res.json({success: true, respuesta: 'No has likeado ningun Itinerario'})
        }
    },
}

module.exports = userControllers