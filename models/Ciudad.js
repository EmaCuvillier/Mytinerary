const mongoose = require('mongoose')

const ciudadSchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    description: {type: String},
    image: {type: String}
})

const Ciudad = mongoose.model('city', ciudadSchema)

module.exports = Ciudad