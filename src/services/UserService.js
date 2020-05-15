import Service from './Service';
import Sequelize from "sequelize";
import { sign } from "jsonwebtoken";
import config from "../config/config";

class UserService extends Service {

    constructor(model) {
        super(model);
        this.authentication = this.authentication.bind(this);
        this.getAllSubsidiary = this.getAllSubsidiary.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }

    async authentication(rut, password) {
        const sequelize = config.sequelize();
        const result = await sequelize.query(`SELECT rut, firstName + ' ' + lastName AS NombreCompleto
                FROM dbo.cs_usuarios
                WHERE rut = '${rut}' AND PwdCompare('${password}', clave) = 1 AND estado = 1`,
            {
                plain: true,
                raw: false,
                type: Sequelize.QueryTypes.SELECT
            });
        if (result) {
            const payload = {
                user: result
            }
            const token = sign(payload, config.key().llave, {
                expiresIn: 1440
            });
            return {
                error: false,
                statusCode: 200,
                data: token
            }
        }
        return {
            error: true,
            statusCode: 401,
            message: 'Failed to authenticate',
            errors: ''
        }
    }

    async getAllSubsidiary(rut) {
        const sequelize = config.sequelize();
        try {
            const result = await sequelize.query(`select cs_sucursales.idSucursal, cs_sucursales.nombre, cs_sucursales.direccion,
         cs_relacion_usuarioSucursal.isSelected
         from cs_relacion_usuarioSucursal inner join cs_sucursales on cs_relacion_usuarioSucursal.idSucursal = cs_sucursales.idSucursal
         where rutUsuario = '${rut}' and cs_relacion_usuarioSucursal.estado = 1`,
                {
                    type: Sequelize.QueryTypes.SELECT
                });
            return {
                error: false,
                statusCode: 200,
                data: result
            }
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            }
        }
    }

    async getMenu(rut, id) {
        const sequelize = config.sequelize();
        try {
            const result = await sequelize.query(`SELECT menu.parent, menu.texto, REPLACE(menu.url, '{rut}', '${rut}') AS url
                FROM menu
                         INNER JOIN menuUsuario ON menu.id = menuUsuario.id
                WHERE menuUsuario.rutusuario = '${rut}' AND (menu.parent = ${id})
                  AND menuUsuario.estado = 1
                ORDER BY menu.Texto`,
                {
                    type: Sequelize.QueryTypes.SELECT
                });
            return {
                error: false,
                statusCode: 200,
                data: result
            }
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            }
        }
    }

}

export default UserService;