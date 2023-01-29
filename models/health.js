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
  description: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
    
}, { versionKey: false });
mongoose.pluralize(null);
let ProdSanitari = module.exports = mongoose.model('ProdSanitari', postSchema);