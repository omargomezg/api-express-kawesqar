const config = require("../config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  getUserRut: (token) => {
      return jwt.verify(token, config.key().llave, (err, decoded) => {
          if (err) {
              throw new Error(err);
          } else {
              return decoded.user.rut;
          }
      });
  }
};