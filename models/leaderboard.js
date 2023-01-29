const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    dt: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
},
{ versionKey: false });
mongoose.pluralize(null);
let Punteggi = module.exports = mongoose.model('Punteggi', postSchema);
