const express = require("express");
const router = express.Router();
const CartController = require("./cartController");

router.post("/addItem", CartController.addItem);
router.get("/doNothing", CartController.doNothing);
router.post("/createCart", CartController.createCart);

module.exports = router;
