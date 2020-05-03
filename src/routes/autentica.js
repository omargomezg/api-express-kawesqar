const express = require("express");
const authenticationController = require("../controllers/authentication");
const router = express.Router();

router
    .post("/", authenticationController.postAuth(req,resp));

module.exports = router;
