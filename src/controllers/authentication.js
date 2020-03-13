const config = require("../config/config");
const jwt = require("jsonwebtoken");
const sql = require("mssql");

module.exports = {

    postAuth: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                SELECT rut, firstName + ' ' + lastName AS NombreCompleto
                FROM dbo.cs_usuarios
                WHERE (userName = '${req.body.user}') AND (PwdCompare('${req.body.password}', clave) = 1) AND estado = 1
                `)
        }).then(result => {
            if (result.rowsAffected > 0) {
                const payload = {
                    user: result.recordset[0]
                };
                const token = jwt.sign(payload, config.key().llave, {
                    expiresIn: 1440
                });
                resp.json({
                    mensaje: 'Autenticación correcta',
                    token: token
                });
            } else {
                resp
                .status(401)
                .json({ mensaje: "Usuario o contraseña incorrectos" });
            }
        }).catch(err => {
            resp
                .status(500)
                .send("Escribre error" + err);
        });
    }
};
