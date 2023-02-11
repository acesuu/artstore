const productModel = require('../models/product');
const asyncHandler = require('express-async-handler');


const getAllProduct = asyncHandler( async(req,res)=>{

    try{
        
        const product = await productModel.find();
        res.status(201).json(product);

    }catch(error){
        res.status(422).send(error);
    }
});

const deleteProduct = asyncHandler(async (req,res)=>{
    try {
        
        const {id} = req.params;
        const deletedproduct = await productModel.findByIdAndDelete({_id:id});
        res.status(201).json(deletedproduct);

    } catch (error) {
        res.status(422).send(error);
    }
})

module.exports = {getAllProduct, deleteProduct}