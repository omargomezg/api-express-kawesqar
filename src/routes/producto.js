const express = require("express");
const productController = require("../controllers/producto");
const router = express.Router();

router
    .get("/:refresh", productController.getAll)
    .get("/producto/:id", productController.getById)
    .post("/:id", productController.save);

module.exports = router;
