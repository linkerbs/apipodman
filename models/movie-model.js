const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Creamos el schema con 3 campos
const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

//Exportamos el modulo para que se pueda usar en otros archivos
module.exports = mongoose.model('movies', Movie)