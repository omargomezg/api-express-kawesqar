const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                SELECT IdMedida as id, NomMedida as name, lastupdate
                FROM Medidas
                `)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    },

    getById: (req, resp) => {
        resp.send("Escribre error" + err);
    }
};
