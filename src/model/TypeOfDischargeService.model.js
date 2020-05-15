const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class TypeOfDischargeModel extends Model {
}

module.exports = TypeOfDischargeModel;

TypeOfDischargeModel.init({
    id: {
        field: 'idtVenta', type: Sequelize.TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: { field: 'descripcion', type: Sequelize.STRING(40) },
    code: { field: 'codigo', type: Sequelize.STRING(3) },
}, {
    sequelize: config,
    modelName: 'tipoEgreso',
    freezeTableName: true,
    timestamps: false
});
