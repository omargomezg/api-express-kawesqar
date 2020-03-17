const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getFamilyById: (id, callback) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                SELECT idFamilia as id,
                        NomFamilia as name,
                        Estado as isActive,
                        code
                    FROM familia where idFamilia = ${id} 
                `)
        }).then(result => {
            callback(result.recordset[0]);
        }).catch(err => {
            callback(err);
        });
    },
    create: (description, code, callback) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                insert into familia (NomFamilia, Estado, code) values ('${description}', 1, '${code}');
                select SCOPE_IDENTITY() as id;
                `)
        }).then(result => {
            callback(result.recordset[0]);
        }).catch(err => {
            callback(err);
        });
    },
    relateToSucursal: (sucursal, familia, callback) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                INSERT INTO sucursalAsociada (idSucursal, idFamilia, estado) VALUES (${sucursal}, ${familia}, 1)
                `)
        }).then(result => {
            callback(result.recordset[0]);
        }).catch(err => {
            callback(err);
        });
    }
};