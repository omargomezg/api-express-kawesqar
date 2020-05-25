const config = require("../config/config");
const sql = require("mssql");
const invoice = require('../model/invoice.model');

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
    },
    save: (req, res) => {
        invoice.findOrCreate({
            where: {
                document_number: 8350372,
                supplier_id: '96670840-9'
            }
        }).then(result => {
            console.log(result);
        });
        /*sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`insert into facturas (NFactura, ProvRut, Fecha, fechaIngreso, rutUsuario, estadoUso,
                                                  valImpuesto, idTipoDocIn, notas, Sucursal)
                            values ('${param.numero}',
                                    '${param.rut}',
                                    ${param.fecha},
                                    getdate(),
                                    '${rut}',
                                    '${param.estado}',
                                    ${param.impuesto},
                                    ${tipoDocumento},
                                    '${param.notas}',
                                    ${sucursal})`);
            })
            .then(result => {
                callback(result.recordset);
            })
            .catch(err => {
                callback(err);
            });*/
    }
};
