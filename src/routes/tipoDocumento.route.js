const express = require("express");
const tipoDocumentoController = require("../controllers/tipoDocumento");
const router = express.Router();

router
    .get("/", tipoDocumentoController.getAll)

module.exports = router;
