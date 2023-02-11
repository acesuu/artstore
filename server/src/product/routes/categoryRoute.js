const express = require("express");
const router = express.Router();
const multer = require("multer");
const categoryController = require("../controllers/categoryController");

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
  limits: { fieldSize: 25 * 1024 * 1024 },
}).single("image");

router.post("/create-product", upload, categoryController.createCategory);

router.get("/get-all-category", categoryController.getAllCategory);

router.delete("/delete-category", categoryController.deleteCatergory);
