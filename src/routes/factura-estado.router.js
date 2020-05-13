const express = require("express");
const invoiceController = require("../controllers/factura.controller");
const router = express.Router();

router
    .get('/:state', invoiceController.getAllByState);

module.exports = router;
