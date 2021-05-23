const express = require('express')
const router = express.Router()
const ciudadesControllers = require('../controllers/ciudadesControllers')
const itinerariosControllers = require('../controllers/itinerariosControllers')
const userControllers = require('../controllers/usersConstrollers')
const actividadesControllers = require('../controllers/actividadesControllers')
const validador = require('../config/validador')
const passport = require('passport')

const {obtenerTodasLasCiudades, cargarUnaCiudad, obtenerUnaCiudad, modificarUnaCiudad, eliminarUnaCiudad} = ciudadesControllers
const {obtenerTodosLosItinerarios, cargarUnItinerario, obtenerItinerariosPorCiudad, obtenerUnItinerario, modificarUnItinerario, borrarUnItinerario, agregarUnComentario, borrarUnComentario, editarUnComentario, likearItinerario, verificarLikes} = itinerariosControllers
const {cargarNuevoUsuario, logearUsuario, loginForzado, pedirInfoUsuario} = userControllers
const {cargarUnaActividad, pedirActividadesPorItinerario} = actividadesControllers

router.route('/ciudades')
.get(obtenerTodasLasCiudades)
.post(cargarUnaCiudad)

router.route('/ciudad/:id')
.get(obtenerUnaCiudad)
.put(modificarUnaCiudad)
.delete(eliminarUnaCiudad)

router.route('/itinerarios')
.get(obtenerTodosLosItinerarios)
.post(cargarUnItinerario)

router.route('/itinerarios/:id')
.get(obtenerItinerariosPorCiudad)

router.route('/itinerario/:id')
.get(obtenerUnItinerario)
.put(modificarUnItinerario)
.delete(borrarUnItinerario)

router.route('/itinerario/comentario/:id')
.post(passport.authenticate('jwt', {session: false}), agregarUnComentario)
.delete(passport.authenticate('jwt', {session: false}), borrarUnComentario)
.put(passport.authenticate('jwt', {session: false}), editarUnComentario)

router.route('/users/signup')
.post(validador, cargarNuevoUsuario)

router.route('/users/login')
.post(logearUsuario)

router.route('/users/loginLs')
.get(passport.authenticate('jwt', {session: false}), loginForzado)

router.route('/itinerario/actividad')
.post(cargarUnaActividad)

router.route('/itinerario/actividad/:id')
.get(pedirActividadesPorItinerario)

router.route('/itinerario/like/:id')
.get(passport.authenticate('jwt', {session: false}), likearItinerario)

router.route('/itinerario/likecomentario/:id')
.get(passport.authenticate('jwt', {session: false}), verificarLikes)

router.route('/infoUsuario')
.get(passport.authenticate('jwt', {session: false}), pedirInfoUsuario)

module.exports = router
