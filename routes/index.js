const express = require("express");
const authenticationRoutes = require("./autentica");
const comunasRoutes = require("./comunas");
const sucursalRouter = require("./sucursal");
const usuarioRouter = require("./usuario");
const bodegaRouter = require("./bodega");
const familiaRouter = require("./familia");

const router = express.Router();

router.use("/authentication", authenticationRoutes);
router.use("/comuna", comunasRoutes);
router.use("/sucursal", sucursalRouter);
router.use("/usuario", usuarioRouter);
router.use("/bodega", bodegaRouter);
router.use("/familia", familiaRouter);

module.exports = router;
