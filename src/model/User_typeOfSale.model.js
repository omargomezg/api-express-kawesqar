const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class User_TypeOfSaleModel extends Model { }

module.exports = User_TypeOfSaleModel;

User_TypeOfSaleModel.init({
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        field: 'rutUsuario',
        type: Sequelize.STRING(12),
        allowNull: false,
        references: {
            model: 'cs_usuarios',
            key: 'rut'
        }
    },
    sale_id: {
        field: 'idtVenta',
        type: Sequelize.TINYINT,
        allowNull: false,
        references: {
            model: 'tipoEgreso',
            key: 'idtVenta'
        }
    },
    isActive: {
        field: 'estado',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    isDefault: {
        field: 'selDefault',
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    sequelize: config,
    modelName: 'tipoEgreso_Usuario',
    freezeTableName: true,
    timestamps: false
});