const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                    SELECT idRol       AS id,
                           titulo      AS name,
                           descripcion AS description,
                           estado      AS isActive,
                           accesoVenta,
                           valorDescuento,
                           ventAdmin,
                           isDefault
                    FROM cs_rol`)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    }
};
