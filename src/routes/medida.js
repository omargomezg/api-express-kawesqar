const express = require("express");
const medidaController = require("../controllers/medida");
const router = express.Router();

router
    .get("/", medidaController.getAll);

module.exports = router;
