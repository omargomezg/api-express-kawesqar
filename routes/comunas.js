const express = require("express");
const comunasController = require("../controllers/comunas");
const router = express.Router();

router
.get("/", comunasController.getComunas)
.get("/:id", comunasController.getComuna);

module.exports = router;