import jwt from 'jsonwebtoken';
import config from './config';

const isProtected = (req, res, next) => {

    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, config.key().llave, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .json({mensaje: 'Token inválida'});
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res
            .status(401)
            .send({
                mensaje: 'Token no proveída.'
            });
    }
}

export default isProtected;