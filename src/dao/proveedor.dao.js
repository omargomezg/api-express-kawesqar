const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getByRut: async (rut, callback) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`
                select	ProvRut rut,
                        ProvNombre nombre,
                        ProvFono fono,
                        ProvFax fax,
                        ProvCelular celular,
                        ProvDireccion direccion,
                        ProvMail email,
                        ProvWeb web,
                        ProvEstado estado,
                        codigo,
                        ProvAbreviacion abreviacion
                from proveedor where ProvRut = '${rut}'`)
            })
            .then(result => {
                callback(result.recordset[0]);
            })
            .catch(err => {
                callback(err);
            });
    }
};
