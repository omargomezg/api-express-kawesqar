const express = require("express");
const authenticationRoutes = require("./autentica");
const comunasRoutes = require("./comunas");
const sucursalRouter = require("./sucursal");
const usuarioRouter = require("./usuario");
const bodegaRouter = require("./bodega");
const familiaRouter = require("./familia");
const protectedRoute = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/config");

protectedRoute.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, config.key().llave, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
});

const router = express.Router();

router.use("/authentication", authenticationRoutes);
router.use("/comuna", protectedRoute, comunasRoutes);
router.use("/sucursal", protectedRoute, sucursalRouter);
router.use("/usuario", protectedRoute, usuarioRouter);
router.use("/bodega", protectedRoute, bodegaRouter);
router.use("/familia", protectedRoute, familiaRouter);

module.exports = router;
