const express = require("express");
const authenticationRoutes = require("./autentica");
const comunasRoutes = require("./comunas");
const sucursalRouter = require("./sucursal");
const usuarioRouter = require("./usuario");
const bodegaRouter = require("./bodega");
const familiaRouter = require("./familia");
const productoRouter = require("./producto");
const medidaRouter = require("./medida");
const rolRouter = require("./rol");
const tipoEgresoRouter = require("./tipo-egreso");
const facturaRouter = require("./factura");
const proveedorRouter = require("./proveedor.route");
const tipoDocumentoRouter = require("./tipoDocumento.route");
const protectedRoute = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/config");

protectedRoute.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, config.key().llave, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .json({mensaje: 'Token inválida'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res
            .status(401)
            .send({
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
router.use("/producto", protectedRoute, productoRouter);
router.use("/medida", protectedRoute, medidaRouter);
router.use("/rol", protectedRoute, rolRouter);
router.use("/tipo-egreso", protectedRoute, tipoEgresoRouter);
router.use("/factura", protectedRoute, facturaRouter);
router.use("/proveedor", protectedRoute, proveedorRouter);
router.use("/tipo-documento", tipoDocumentoRouter);

module.exports = router;
