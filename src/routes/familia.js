const express = require("express");
const familiaController = require("../controllers/familia");
const router = express.Router();

router
    .get("/", familiaController.getAll)
    .post("/", familiaController.update)
    .post("/quick-create", familiaController.quickCreate);

module.exports = router;
