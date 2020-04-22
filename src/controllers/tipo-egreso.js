const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                    SELECT idtVenta    AS id,
                           descripcion AS description,
                           codigo      AS code
                    FROM tipoEgreso`)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    }
};
