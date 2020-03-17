const config = require("../config/config");
const sql = require("mssql");
const familyDao = require("../dao/family");
const jwtUtils = require("../services/jwt");

module.exports = {
    quickCreate: (req, resp) => {
        const rut = jwtUtils.getUserRut(req.headers['access-token']);
        let id = 0;
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .input("name", sql.NVarChar(100), req.body.description)
                    .input("code", sql.VarChar(10), req.body.code)
                    .input("user", sql.VarChar(10), rut)
                    .output("new_id", sql.Int, id)
                    .execute("quickCreate_Family");
            })
            .then(result => {
                resp
                    .send({id: result.output.new_id});
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    },

    update: (req, resp) => {
        if (req.body.id > 0) {
            sql.connect(config.config()).then(pool => {
                return pool.request()
                    .query(`update familia
                set NomFamilia = '${req.body.description}', Estado = '${req.body.isActive}', code = '${req.body.code}' 
                where idFamilia = ${req.body.id};`)
            }).then(result => {
                resp.send(familyDao.getFamilyById(req.body.id));
            }).catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
        }
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
