const config = require("../config/config");
const sql = require("mssql");
const proov = require("../dao/proveedor.dao");

module.exports = {
    getAll: (estado, callback) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`
                select
                    idFact id,
                    NFactura numero,
                    Fecha fecha,
                    fechaIngreso fecha_registro,
                    rutUsuario usuario_rut,
                    valImpuesto impuesto,
                    idTipoDocIn tipo_documento_id,
                    notas,
                    Sucursal sucursal_id,
                    estadoUso,
                    facturas.ProvRut proveedor_rut,
                    prov.ProvNombre proveedor_nombre
                from facturas inner join proveedor prov on prov.ProvRut = facturas.ProvRut
                where estadoUso = '${estado}'`);
            })
            .then(result => {
                callback(result.recordset);
            })
            .catch(err => {
                callback(err);
            });
    }
};
