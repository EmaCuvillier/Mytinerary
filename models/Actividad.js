const mongoose = require('mongoose')

const ActividadSchema = new mongoose.Schema({
    title: {type: String, required:true},
    activityPic: {type: String, required: true},
    idItinerary: {type: mongoose.Types.ObjectId, ref: 'itinerary'},
})

const Actividad = mongoose.model('activity', ActividadSchema)

module.exports = Actividad