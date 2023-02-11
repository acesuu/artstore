const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    image: {
        data: String,
        contentType: String
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const category = new mongoose.model('category', categorySchema);

module.exports = category;