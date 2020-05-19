const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class TypeOfSaleModel extends Model { }

module.exports = TypeOfSaleModel;

TypeOfSaleModel.init({
    id: {
        field: 'idtVenta',
        type: Sequelize.TINYINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'descripcion',
        type: Sequelize.STRING(40),
        allowNull: false,
        validate: {
            notEmpty: true
        },
        get() {
            return String(this.getDataValue('name')).trim();
        }
    },
    code: {
        field: 'codigo',
        type: Sequelize.STRING(3),
        get() {
            return String(this.getDataValue('code')).trim();
        }
    }
}, {
    sequelize: config,
    modelName: 'tipoEgreso',
    freezeTableName: true,
    timestamps: false
});