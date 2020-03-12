const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`select bodega.idBodega, bodega.descripcion, bodega.code
                from bodega inner join bodega_sucursal on bodega.idBodega = bodega_sucursal.idBodega
                where bodega_sucursal.idSucursal = ${req.params.sucursal}`)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    },

    put: (req, resp) => {
        sql
            .connect(config )
            .then(pool => {
                return pool.request()
                    .input("idBodega", sql.Int, req.body.id)
                    .input("descripcion", sql.NVarChar(200), req.body.description)
                    .input("code", sql.VarChar(10), req.body.code)
                    .execute("mantenedorBodegas");
            })
            .then(result => {
                resp.send(result.recordset[0]);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    }
}