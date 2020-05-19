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
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
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
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        field: 'eMail',
        type: Sequelize.STRING(256),
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    role: {
        field: 'rol',
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize: config,
    modelName: 'cs_usuarios',
    freezeTableName: true,
    timestamps: true
});