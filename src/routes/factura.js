const express = require("express");
const invoiceController = require("../controllers/factura.controller");
const router = express.Router();

router
    .get("/:estado", invoiceController.getAll)
    .post("/", invoiceController.save);

module.exports = router;
