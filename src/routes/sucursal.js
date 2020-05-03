const express = require("express");
const subsidiaryController = require("../controllers/sucursal");
const router = express.Router();

router
    .get("/", subsidiaryController.getSucursales)
    .get("/:id", subsidiaryController.getBydId)
    .put("/:id", subsidiaryController.mantenedorSucursal)
    .post("/", subsidiaryController.mantenedorSucursal)
    .get("/:id/bodegas-asociadas", subsidiaryController.getBodegasAsociadas)
    .post("/:id/bodegas-asociadas", subsidiaryController.asociarBodega)
    .get("/:id/familia", subsidiaryController.getFamilias)
    .post("/:id/familia", subsidiaryController.relateFamily);

module.exports = router;
