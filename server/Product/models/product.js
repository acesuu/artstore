const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    categoryName:{
        type: String,
        required: true
    },
    
    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
    },

    price:{
        type: Number
    },

    owner:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }

});

const product = new mongoose.model("product", productSchema);

module.exports = product;