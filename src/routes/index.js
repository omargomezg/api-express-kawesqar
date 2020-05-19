const express = require('express');
const comunasRoutes = require('./comunas');
const subsidiaryRouter = require('./sucursal');
const userRouter = require('./usuario');
const miAccountRouter = require('./miCuenta.router')
const bodegaRouter = require('./bodega');
const familyRouter = require('./familia');
const productoRouter = require('./producto');
const rolRouter = require('./rol');
const invoiceRouter = require('./factura');
const invoiceByStatusRouter = require('./factura-estado.router');
const proveedorRouter = require('./proveedor.route');
const protectedRoute = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');

protectedRoute.use((req, res, next) => {Holas,
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

router.use('/comuna', protectedRoute, comunasRoutes);
router.use('/sucursal', protectedRoute, subsidiaryRouter);
router.use('/usuario', protectedRoute, userRouter);
router.use('/mi-cuenta', protectedRoute, miAccountRouter);
router.use('/bodega', protectedRoute, bodegaRouter);
router.use('/familia', protectedRoute, familyRouter);
router.use('/producto', protectedRoute, productoRouter);
router.use('/rol', protectedRoute, rolRouter);
router.use('/factura', protectedRoute, invoiceRouter);
router.use('/factura-detalle', protectedRoute, invoiceRouter);
router.use('/factura-por-estado', invoiceByStatusRouter);
router.use('/proveedor', protectedRoute, proveedorRouter);
module.exports = router;
