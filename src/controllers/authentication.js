const config = require("../config/config");
const jwt = require("jsonwebtoken");
const sql = require("mssql");

module.exports = {

    postAuth: (req, resp) => {
        var rut = formateaRut(req.body.user);
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                SELECT rut, firstName + ' ' + lastName AS NombreCompleto
                FROM dbo.cs_usuarios
                WHERE rut = '${rut}' AND PwdCompare('${req.body.password}', clave) = 1 AND estado = 1
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

function formateaRut(rut) {
    var actual = rut.replace(/^0+/, "");
    if (actual != '' && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "" + rutPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }
    return rutPuntos;
}
