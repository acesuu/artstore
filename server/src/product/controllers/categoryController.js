const categoryModel = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');


const createCategory = asyncHandler(async(req,res)=>{
    try {
        
        const newCategory= new categoryModel({
            name: req.body.name,
            image:{
                data: req.body.image,
                contentType: "image/png"
            },
            description: req.body.description 
        })

        await newCategory.save()
            .then(()=> res.send("successfully uploaded"))
            .catch(err => console.log(err))

    } catch (error) {
        res.status(422).send(error);
    }
})


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

module.exports = {createCategory, getAllCategory, deleteCatergory}