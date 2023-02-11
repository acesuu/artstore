const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController')

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
})

const upload = multer ({
    storage: Storage, limits: {fieldSize: 25*1024*1024}
}).single('image')

router.post('/create-product',upload, productController.createProduct );

router.get('/get-all-product', productController.getAllProduct);

router.delete('/delete-product', productController.deleteProduct);