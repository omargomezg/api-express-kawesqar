const express = require("express");
const invoiceController = require("../controllers/factura.controller");
const router = express.Router();

router
    .get("/", invoiceController.getAll)
    .post("/", invoiceController.save)
    .delete('/', invoiceController.delete);

module.exports = router;
