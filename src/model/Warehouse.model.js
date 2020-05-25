const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class WarehouseModel extends Model { }

module.exports = WarehouseModel;

WarehouseModel.init({
    id: {
        field: 'idBodega',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'descripcion',
        type: Sequelize.STRING(200)
    },
    code: {
        type: Sequelize.STRING(10)
    }
}, {
    sequelize: config,
    modelName: 'bodega',
    freezeTableName: true,
    timestamps: false
});