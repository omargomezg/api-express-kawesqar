import Service from './Service';
import {Op, Sequelize} from "sequelize";
import {sign} from "jsonwebtoken";
import config from "../config/config";
import RelationUserSubsidiaryModel from "../model/User_subsidiary.model";
import SubsidiaryModel from "../model/Subsidiary.model";
import RelationUserTypeOfSaleModel from "../model/User_typeOfSale.model";
import TypeOfSaleModel from "../model/TypeOfSale.model";
import TurnModel from "../model/Turn.model";

class UserService extends Service {

    constructor(model) {
        super(model);
        this.update = this.update.bind(this);
        this.insert = this.insert.bind(this);
        this.authentication = this.authentication.bind(this);
        this.getAllRelationUserInSubsidiary = this.getAllRelationUserInSubsidiary.bind(this);
        this.insertRelationUserInSubsidiary = this.insertRelationUserInSubsidiary.bind(this);
        this.getAllRelationUserInTypeOfSale = this.getAllRelationUserInTypeOfSale.bind(this);
        this.insertRelationUserInTypeOfSale = this.insertRelationUserInTypeOfSale.bind(this);
        this.getAllSubsidiary = this.getAllSubsidiary.bind(this);
        this.getMenu = this.getMenu.bind(this);
        this.getAllTurn = this.getAllTurn.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    async updatePassword(jwtRut, body) {
        const sequelize = config.sequelize();
        try {
            if (jwtRut !== body.rut) {
                throw new Error('Json web token rut is not correct whit body rut');
            }
            let item = await this.model.findOne({
                where: {
                    rut: jwtRut
                }
            });
            if (!item) {
                throw new Error('Element not found');
            }
            const getUser = await sequelize
                .query(`SELECT rut from dbo.cs_usuarios WHERE rut = '${jwtRut}' and PwdCompare('${body.oldPassword}', clave) = 1;`);
            if (getUser[0][0] === undefined) {
                return {
                    error: false,
                    statusCode: 200,
                    data: {message: 'Old password cannot match'}
                };
            }
            await sequelize
                .query(`UPDATE dbo.cs_usuarios SET clave = PwdEncrypt('${body.password}')
                                            WHERE rut = '${jwtRut}' and PwdCompare('${body.oldPassword}', clave) = 1;`);
            return {
                error: false,
                statusCode: 202,
                data: {message: 'Password has updated'}
            };
        } catch (error) {
            console.log(error)
            return {
                error: true,
                statusCode: 500,
                data: {message: error.toString()}
            };
        }
    }

    async insert(data) {
        const sequelize = config.sequelize();
        try {
            let {
                rut, userName, firstName, lastName, secondLastName, isActive, fono, email, role, salidaFactura, salidaEmpleados,
                salidaVenta, idEgresoDefault, password
            } = data;
            delete data.password;
            delete data.username;
            await sequelize.query(`
            INSERT INTO cs_usuarios (rut, firstName, lastName, secondLastName, fono, eMail, clave, fechacreacion, userName, salidaVenta,
                salidaFactura, salidaEmpleados, traspaso, credito, updated, rol)
            VALUES ('${rut}', '${firstName}', '${lastName}', '${secondLastName}', '${fono}', '${email}', PwdEncrypt('${password}'), GETDATE(), '${userName}', ${this.getBooleanSql(salidaVenta)}, 
                ${this.getBooleanSql(salidaFactura)}, ${this.getBooleanSql(salidaEmpleados)}, 0, 0, GETDATE(), ${role})`);

            let item = await this.model.findByPk(rut);
            if (item)
                return {
                    error: false,
                    statusCode: 200,
                    data: item
                }
        } catch (err) {
            let isUnique = false;
            if (err.errors) {
                isUnique = err.errors.some(item => {
                    return item.type === 'unique violation';
                });
            }
            return {
                error: true,
                statusCode: isUnique ? 409 : 500,
                message: err.errmsg || 'Not able to create item',
                errors: err
            }
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByPk(data.rut);
            if (!item)
                throw new Error('Element not found');
            await this.model.update(data, {where: {rut: data.rut}})
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
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
                expiresIn: 3600000
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


    async getAllTurn(query) {
        let {skip, limit} = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            const items = await TurnModel.findAll({
                where: query,
                limit: limit
            });
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }

    async getAllRelationUserInSubsidiary(query) {
        let {skip, limit} = query;
        let ids = [];

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            let related = await RelationUserSubsidiaryModel.findAll({
                where: query
            });
            related.forEach(item => {
                ids.push(item.subsidiary_id)
            });
            const items = await SubsidiaryModel.findAll({
                where: {
                    id: {
                        [Op.in]: ids
                    }
                }
            });
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }

    async insertRelationUserInSubsidiary(newRelation) {
        try {
            const rut = newRelation.user_id;
            RelationUserSubsidiaryModel.destroy({
                where: {
                    user_id: newRelation.user_id
                }
            });
            const bulk = await RelationUserSubsidiaryModel.bulkCreate(newRelation.items);
            return {
                error: false,
                statusCode: 200,
                data: bulk
            }
        } catch (err) {
            return {
                error: true,
                statusCode: 500,
                errors: err.errors
            }
        }
    }

    async getAllRelationUserInTypeOfSale(query) {
        let {skip, limit} = query;
        let ids = [];

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            let related = await RelationUserTypeOfSaleModel.findAll({
                where: query
            });
            related.forEach(item => {
                ids.push(item.sale_id)
            });
            const items = await TypeOfSaleModel.findAll({
                where: {
                    id: {
                        [Op.in]: ids
                    }
                },
                raw: true
            });
            for (let index = 0; index < items.length; index++) {
                const relation = await RelationUserTypeOfSaleModel.findOne({
                    where: {
                        sale_id: items[index].id
                    }
                });
                items[index].name.trim();
                items[index].isPrimary = relation.getDataValue('isDefault');
            }
            ;
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }

    async insertRelationUserInTypeOfSale(newRelation) {
        try {
            const rut = newRelation.user_id;
            RelationUserSubsidiaryModel.destroy({
                where: {
                    user_id: newRelation.user_id
                }
            });
            const bulk = await RelationUserSubsidiaryModel.bulkCreate(newRelation.items);
            return {
                error: false,
                statusCode: 200,
                data: bulk
            }
        } catch (err) {
            return {
                error: true,
                statusCode: 500,
                errors: err.errors
            }
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

    getBooleanSql(status) {
        return status ? 1 : 0;
    }

}

export default UserService;