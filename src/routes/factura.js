const express = require("express");
const facturaController = require("../controllers/factura.controller");
const router = express.Router();

router
    .get("/:estado", facturaController.getAll)

module.exports = router;
