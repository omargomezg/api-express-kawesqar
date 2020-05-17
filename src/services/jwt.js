import config from "../config/config";
import jwt from "jsonwebtoken";

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