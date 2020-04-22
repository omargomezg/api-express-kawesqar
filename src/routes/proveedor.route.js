const express = require("express");
const proveedorController = require("../controllers/proveedor.controller");
const router = express.Router();

router
    .get("/", proveedorController.getAll)

module.exports = router;
