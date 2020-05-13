const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;
const InvoiceModel = require('./invoice.model');

class TypeOfDocumentModel extends Model {
}

module.exports = TypeOfDocumentModel;

TypeOfDocumentModel.init({
    id: {field: 'idTipoDocIn', type: Sequelize.INTEGER, primaryKey: true},
    name: {field: 'descripcion', type: Sequelize.STRING(50)},
    isActive: {field: 'estado', type: Sequelize.BOOLEAN}
}, {
    sequelize: config,
    modelName: 'tipoDocIn',
    freezeTableName: true,
    timestamps: false
});

TypeOfDocumentModel.belongsTo(InvoiceModel, {
    foreignKey: 'idTipoDocIn'
});
TypeOfDocumentModel.hasMany(InvoiceModel);