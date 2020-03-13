const express = require("express");
const authenticationController = require("../controllers/authentication");
const router = express.Router();

router
    .post("/", authenticationController.postAuth);

module.exports = router;
