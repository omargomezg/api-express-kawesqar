const express = require("express");
const invoiceController = require("../controllers/factura.controller");
const router = express.Router();

router
    .get("/", invoiceController.getAll)
    .post("/", invoiceController.save)
    .delete('/:id', invoiceController.delete);

router
    .route('/detalle')
    .get('/:invoice_id', () => {

    });

module.exports = router;
