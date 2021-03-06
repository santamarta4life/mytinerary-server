const mongoose = require('mongoose')


const citySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
})

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model('city', citySchema)