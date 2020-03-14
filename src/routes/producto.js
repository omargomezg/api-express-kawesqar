const express = require("express");
const productoController = require("../controllers/producto");
const router = express.Router();

router
    .get("/", productoController.getAll)
    .get("/:id", productoController.getById)
    .post("/:id", productoController.save);

module.exports = router;
