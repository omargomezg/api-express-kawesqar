const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getById: (req, resp) => {
        if(req.params.light) {
            getLightMany(req, resp);
        } else {
            sql
                .connect(config.config())
                .then(pool => {
                    return pool.request()
                        .input("rut", sql.VarChar(12), req.params.rut)
                        .execute("userByRut");
                })
                .then(result => {
                    resp.send(result.recordset[0]);
                })
                .catch(err => {
                    resp.status(500).send("Escribre error" + err);
                });
        }
    },
    getLightMany: (req, resp) => {
        sql.connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`
                        SELECT rut                                               AS rut,
                               firstName + ' ' + lastName + ' ' + secondLastName AS fullName,
                               fechaCreacion                                     AS created,
                               estado                                            AS isActive,
                               userName                                          AS userName,
                               eMail                                             AS email,
                               updated                                           AS lastUpdate,
                               rol
                        FROM cs_usuarios
                        ORDER BY updated DESC`)
            })
            .then(result => {
                resp.send(result.recordset);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    },
    getMany: (req, resp) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request().execute("PA_SEL_USUARIOS");
            })
            .then(result => {
                resp.send(result.recordset);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    },

    create: (req, resp) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool
                    .request()
                    .input("rutUsuario", sql.VarChar(12), req.body.rut)
                    .input("nombres", sql.VarChar(256), req.body.firstName)
                    .input("apPaterno", sql.VarChar(256), req.body.lastName)
                    .input("apMaterno", sql.VarChar(256), req.body.secondLastName)
                    .input("clave", sql.NVarChar(50), req.body.clave)
                    .input("userName", sql.VarChar(50), req.body.userName)
                    .input("fono", sql.NChar(10), req.body.fono)
                    .input("eMail", sql.VarChar(256), req.body.eMail)
                    .input("salidaVenta", sql.Bit, req.body.salidaVenta)
                    .input("salidaFactura", sql.Bit, req.body.salidaFactura)
                    .input("salidaEmpleados", sql.Bit, req.body.salidaEmpleados)
                    .input("rol", sql.Int, req.body.rol)
                    .input("idEgresoDefault", sql.TinyInt, req.body.idEgresoDefault)
                    .execute("mantenedorUsuario");
            })
            .then(result => {
                resp.send(result.recordset);
            })
            .catch(err => {
                resp.status(500).send("Escribre error" + err);
            });
    },

    update: (req, resp) => {

    },

    getMenu: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`SELECT menu.parent, menu.texto, REPLACE(menu.url, '{rut}', dbo.formatearRut('${req.params.rut}')) AS url
                FROM menu
                         INNER JOIN menuUsuario ON menu.id = menuUsuario.id
                WHERE menuUsuario.rutusuario = dbo.formatearRut('${req.params.rut}') AND (menu.parent = ${req.params.parent})
                  AND menuUsuario.estado = 1
                ORDER BY menu.Texto`)
        }).then(result => {
            resp.send(result.recordset);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    }
};
