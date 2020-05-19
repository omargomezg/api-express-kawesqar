const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class User_SubsidiaryModel extends Model { }

module.exports = User_SubsidiaryModel;

User_SubsidiaryModel.init({
    id: {
        field: 'idRelacion',
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    subsidiary_id: {
        field: 'idSucursal',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'cs_sucursales',
            key: 'idSucursal'
        }
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
    isActive: {
        field: 'estado',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    isSelected: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize: config,
    modelName: 'cs_relacion_usuarioSucursal',
    freezeTableName: true,
    timestamps: false
});