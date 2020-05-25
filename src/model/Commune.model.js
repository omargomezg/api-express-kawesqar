const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class CommuneModel extends Model { }

module.exports = CommuneModel;

CommuneModel.init({
    id: {
        field: 'codigo',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    father: {
        field: 'padre',
        type: Sequelize.INTEGER
    },
    name: {
        field: 'nombre',
        type: Sequelize.STRING(255)
    }
}, {
    sequelize: config,
    modelName: 'comunas',
    freezeTableName: true,
    timestamps: false
});