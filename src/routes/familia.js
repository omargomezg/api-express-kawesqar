const express = require("express");
const familiaController = require("../controllers/familia");
const router = express.Router();

router
    .post("/", familiaController.update);

module.exports = router;
