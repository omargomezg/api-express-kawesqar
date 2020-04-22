const config = require("../config/config");
const sql = require("mssql");
const facturaDao = require("../dao/factura.dao")
const proveedorDao = require("../dao/proveedor.dao");
const jwtUtils = require("../services/jwt");

module.exports = {
    getAll: async (req, resp, next) => {
        // const rut = jwtUtils.getUserRut(req.headers['access-token']);        
        facturaDao.getAll(req.params.estado, data => {
            const facturas = data.map(function (item) {
                const factura = {}
                const proveedor = {}
                factura.id = item.id;
                factura.numero = item.numero.trim();
                factura.estadoUso = item.estadoUso;
                proveedor.rut = item.proveedor_rut;
                proveedor.nombre = item.proveedor_nombre;
                factura.proveedor = proveedor;
                return factura;
            });
            resp.send(facturas);
        });
    }
};