const config = require("../config/config");
const sql = require("mssql");
const cache = require("memory-cache");

module.exports = {

    getAll: (req, resp) => {
        let key = '_express_' + req.originalUrl || req.url;
        let cacheBody = cache.get(key);
        if (cacheBody) {
            resp.send(cacheBody);
        } else {
            sql.connect(config.config()).then(pool => {
                return pool.request()
                    .query(`
                SELECT dbo.Articulos.IdArticulo, dbo.Articulos.NomArticulo, dbo.Articulos.IdMedida, dbo.Articulos.Estado, dbo.Articulos.Alerta, dbo.Articulos.vencimiento, dbo.Articulos.ID, dbo.Articulos.ganancia, dbo.Medidas.NomMedida, dbo.Articulos.Notas, dbo.Articulos.precioGranel
                FROM dbo.Articulos INNER JOIN dbo.Medidas ON dbo.Articulos.IdMedida = dbo.Medidas.IdMedida
                `)
            }).then(result => {
                cache.put(key, result.recordset, 10000);
                resp.send(result.recordset);
            }).catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
        }
    },

    getById: (req, resp) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .input("idArticulo", sql.NVarChar(50), req.params.id)
                    .execute("searchArticuloPorCodigo");
            })
            .then(result => {
                resp.send(result.recordset[0]);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    },

    save: (req, resp) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .input("idArticulo", sql.NVarChar(50), req.body.sku)
                    .input("nomArticulo", sql.NVarChar(50), req.body.nomArticulo)
                    .input("idMedida", sql.Int, req.body.IdMedida)
                    .input("estado", sql.Bit, req.body.estado)
                    .input("alerta", sql.Int, req.body.Alerta)
                    .input("estadoAlerta", sql.Bit, req.body.estadoAlerta)
                    .input("vencimiento", sql.Bit, req.body.vencimiento)
                    .input("notas", sql.Text, req.body.Notas)
                    .input("ganancia", sql.Money, req.body.ganancia)
                    .input("idFamilia", sql.Int, req.body.idFamilia)
                    .input("precioGranel", sql.Money, req.body.precioGranel)
                    .input("idMedidaGranel", sql.Int, req.body.idMedidaGranel)
                    .input("usaInventario", sql.Bit, req.body.usaInventario)
                    .input("folio", sql.Int, req.body.folio)
                    .execute("mantenedorArticulos");
            })
            .then(result => {
                resp.send(result.recordset[0]);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    }
};
