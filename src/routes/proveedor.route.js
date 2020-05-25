const express = require("express");
const proveedorController = require("../controllers/proveedor.controller");
const router = express.Router();

router
    .get('/', proveedorController.getAll)
    .post('/', proveedorController.save);

module.exports = router;
