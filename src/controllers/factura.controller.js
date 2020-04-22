const facturaDao = require("../dao/factura.dao")

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
