const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getAll: (callback) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`select idTipoDocIn id, descripcion description, estado isActive
                            from tipoDocIn`)
            })
            .then(result => {
                callback(result.recordset);
            })
            .catch(err => {
                callback(err);
            });
    }
};
