const config = require("../config/config");
const sql = require("mssql");

exports.getBydId = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("Id", sql.Int, req.params.id)
                .execute("PA_GET_Sucursal");
        })
        .then(result => {
            resp.send(result.recordset[0]);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};

exports.getSucursales = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request().execute("PA_LIST_Sucursales");
        })
        .then(result => {
            resp.send(result.recordset);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};
/**
 * Create a new resource
 */
exports.mantenedorSucursal = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("idSucursal", sql.Int, req.body.id)
                .input("rutSucursal", sql.VarChar(12), req.body.rut)
                .input("nombre", sql.VarChar(50), req.body.nombre)
                .input("direccion", sql.VarChar(80), req.body.direccion)
                .input("codigo", sql.Int, req.body.codigo)
                .input("telefono", sql.VarChar(50), req.body.telefono)
                .input("fax", sql.VarChar(50), req.body.celular)
                .input("rutRepLegal", sql.VarChar(12), req.body.rutRepLegal)
                .input("nombreRepLegal", sql.VarChar(50), req.body.nombreRepLegal)
                .input("Giro", sql.NVarChar(250), req.body.giro)
                .input("registroContado", sql.Bit, req.body.registroContado)
                .input("numInicialRegContado", sql.Numeric(18, 0), req.body.numInicialRegContado)
                .execute("mantenedorSucursal");
        })
        .then(result => {
            resp.send(result.output);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};

exports.getBodegasAsociadas = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("idSucursal", sql.TinyInt, req.params.id)
                .execute("getBodegasAsociadas");
        })
        .then(result => {
            resp.send(result.recordset);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};

exports.asociarBodega = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("idSucursal", sql.TinyInt, req.body.sucursal)
                .input("idBodega", sql.Int, req.body.bodega)
                .input("estado", sql.Bit, req.body.estado)
                .execute("asociarBodegas");
        })
        .then(result => {
            resp.send(result.recordset);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};

exports.getFamilias = function (req, resp) {
    //getFamiliasBySucursal
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("sucursal", sql.TinyInt, req.params.id)
                .execute("getFamiliasBySucursal");
        })
        .then(result => {
            resp.send(result.recordset);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};

exports.asociarFamilia = function (req, resp) {
    sql
        .connect(config.config())
        .then(pool => {
            return pool.request()
                .input("familia", sql.Int, req.body.familia)
                .input("sucursal", sql.TinyInt, req.body.sucursal)
                .input("estado", sql.Bit, req.body.estado)
                .execute("asociarFamilia");
        })
        .then(result => {
            resp.send(result.recordset);
        })
        .catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
};
