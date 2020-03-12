const express = require("express");
const sucursalController = require("../controllers/sucursal");
const router = express.Router();

router
    .get("/", sucursalController.getSucursales)
    .get("/:id", sucursalController.getBydId)
    .put("/:id", sucursalController.mantenedorSucursal)
    .post("/", sucursalController.mantenedorSucursal)
    .get("/:id/bodegas-asociadas", sucursalController.getBodegasAsociadas)
    .post("/:id/bodegas-asociadas", sucursalController.asociarBodega)
    .get("/:id/familia", sucursalController.getFamilias)
    .post("/:id/familia", sucursalController.asociarFamilia);

module.exports = router;
