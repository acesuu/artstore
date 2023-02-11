const productModel = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = new productModel({
      categoryName: req.body.categoryName,
      name: req.body.name,
      description: req.body.description,
      // image:{
      //     data: req.body.image,
      //     contentType: "image/png"
      // },
      price: req.body.price,
      owner: req.body.owner,
    });

    await newProduct
      .save()
      .then(() => res.send("successfully uploaded"))
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(422).send(error);
  }
});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(201).json(product);
  } catch (error) {
    res.status(422).send(error);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedproduct = await productModel.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedproduct);
  } catch (error) {
    res.status(422).send(error);
  }
});

module.exports = { createProduct, getAllProduct, deleteProduct };
