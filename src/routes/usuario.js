const express = require("express");
const userController = require("../controllers/usuario");
const sucursalController = require("../controllers/sucursal")
const router = express.Router();

router
    .get("/", userController.getMany)
    .get("/:rut", userController.getById)
    .put("/:rut", userController.update)
    .post("/", userController.create)
    .get("/:rut/menu/:parent", userController.getMenu)
    .get("/:rut/light", userController.getLightMany);

module.exports = router;
