const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    update: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`update familia
                set NomFamilia = '${req.body.description}', Estado = '${req.body.isActive}', code = '${req.body.code}' 
                where idFamilia = ${req.body.id}; 
                select * from familia where idFamilia = ${req.body.id}`)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    },

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                SELECT idFamilia as id,
                        NomFamilia as name,
                        Estado as isActive,
                        code
                    FROM familia
                `)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    }
};
