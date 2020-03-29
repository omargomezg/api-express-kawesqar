const express = require("express");
const rolController = require("../controllers/rol");
const router = express.Router();

router
    .get("/", rolController.getAll);

module.exports = router;
