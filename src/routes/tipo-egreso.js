const express = require("express");
const tipoEgresoController = require("../controllers/tipo-egreso");
const router = express.Router();

router
    .get("/", tipoEgresoController.getAll);

module.exports = router;
