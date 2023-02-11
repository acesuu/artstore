const categoryModel = require('../models/category');
const asyncHandler = require('express-async-handler');


const getAllCategory = asyncHandler( async(req,res)=>{

    try{
        
        const category = await categoryModel.find();
        res.status(201).json(category);

    }catch(error){
        res.status(422).send(error);
    }
});

const deleteCatergory = asyncHandler(async (req,res)=>{
    try {
        
        const {id} = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete({_id:id});
        res.status(201).json(deletedCategory);

    } catch (error) {
        res.status(422).send(error);
    }
})

module.exports = {getAllCategory, deleteCatergory}