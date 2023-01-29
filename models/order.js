const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    order: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    
}, { versionKey: false });
mongoose.pluralize(null);

let Order = module.exports = mongoose.model('Order', postSchema);