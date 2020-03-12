const key = require("../config/config");
const jwt = require("jsonwebtoken");

module.exports = {

    postAuth: (req, res) => {
        if (req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
            const payload = {
                check: true
            };
            const token = jwt.sign(payload, key.key().llave, {
                expiresIn: 1440
            });
            res.json({
                mensaje: 'Autenticación correcta',
                token: token
            });
        } else {
            res.json({ mensaje: "Usuario o contraseña incorrectos" })
        }
    }
};
