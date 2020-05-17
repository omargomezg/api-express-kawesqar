import Sequelize from 'sequelize';
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class MeasureModel extends Model { }

module.exports = MeasureModel;

MeasureModel.init({
    id: {
        field: 'idTipoDocIn',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'descripcion',
        type: Sequelize.STRING(50)
    },
    isActive: {
        field: 'estado',
        type: Sequelize.BOOLEAN
    }
}, {
    sequelize: config,
    modelName: 'tipoDocIn',
    freezeTableName: true,
    timestamps: false
});