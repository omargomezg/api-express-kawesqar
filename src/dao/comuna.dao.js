const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getById: (id) => {
        return sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`select codigo as id, padre, nombre
                            from comunas where codigo = ${id}`);
            })
            .then(result => {
                return result.recordset[0];
            })
            .catch(err => {
                return err;
            });
    }
};
