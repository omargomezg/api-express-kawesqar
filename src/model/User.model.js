const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class UserModel extends Model { }

module.exports = UserModel;

UserModel.init({
    rut: {
        field: 'rut',
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    secondLastName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    createdAt: {
        field: 'fechaCreacion',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updated',
        type: Sequelize.DATE
    },
    isActive: {
        field: 'estado',
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    userName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        field: 'eMail',
        type: Sequelize.STRING(256)
    }
}, {
    sequelize: config,
    modelName: 'cs_usuarios',
    freezeTableName: true,
    timestamps: true
});