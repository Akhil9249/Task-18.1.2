const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    text: String,
    crossLine: Boolean
},
{strict:false})

module.exports = mongoose.model("Movie",movieSchema)