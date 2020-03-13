
const config = require("../config/config");
const sql = require('mssql');

exports.getComunas = function (req, resp) {
    sql.connect(config.config()).then(pool => {
        return pool.request()
            .execute('PA_LIST_Comunas')
    }).then(result => {
        resp.send(result.recordset);
    }).catch(err => {
        resp.status(500).send('Escribre error' + err);
    })
};
exports.getComuna = function (req, resp) {
    sql.connect(config.config()).then(pool => {
        return pool.request()
            .execute('mantenedorSucursal')
    }).then(result => {
        resp.send(result.recordset);
    }).catch(err => {
        resp.status(500).send('Escribre error' + err);
    })
};