const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    prezzo: {
      type: Number,
      required: true
    },
    slug: {
        type: String,
        required: true
    },
    prezzo_scontato: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
}, { versionKey: false });
mongoose.pluralize(null);

let Vip = module.exports = mongoose.model('Vip', postSchema);