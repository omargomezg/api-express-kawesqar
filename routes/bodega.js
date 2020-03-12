const express = require("express");
const bodegaController = require("../controllers/bodega");
const router = express.Router();

router
    .post("/", bodegaController.put)
    .get("/:sucursal", bodegaController.getAll);

module.exports = router;