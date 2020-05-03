const express = require("express");
const sucursalController = require("../controllers/sucursal")
const router = express.Router();

router
    .get("/sucursal", sucursalController.getSucursalByUserRut);

module.exports = router;
