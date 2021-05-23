const mongoose = require('mongoose')

const itinerarioSchema = new mongoose.Schema({
    title: {type: String, required:true},
    authorName: {type: String, required: true},
    authorPic: {type: String},
    price:{type: Number, required: true},
    duration:{type:Number, require:true},
    likes:{type:Number},
    comments: [{userId:{type: mongoose.Types.ObjectId, ref: 'user'}, comment:{type:String}}], 
    userLiked: [{type:String}],
    idCity: {type: mongoose.Types.ObjectId, ref: 'city'},
    hashtag: [{type: String, min: 1, max: 5, required: true}]
})

const Itinerario = mongoose.model('itinerary', itinerarioSchema)

module.exports = Itinerario