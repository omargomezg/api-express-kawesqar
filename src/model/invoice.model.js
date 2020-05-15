const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Provider = require('./Provider.model');
const TypeOfDocument = require('./TypeOfDocument.model');
const Model = Sequelize.Model;
const moment = require('moment');

class InvoiceModel extends Model {
}

module.exports = InvoiceModel;

InvoiceModel.init({
    id: {
        field: 'idFact',
        type: Sequelize.INTEGER,
        primaryKey: true, autoIncrement: true
    },
    document_number: {
        field: 'NFactura',
        type: Sequelize.CHAR(10)
    },
    emission_date: {
        field: 'Fecha', type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('Fecha')).format('DD-MM-YYYY');
        }
    },
    provider_id: { field: 'provRut', type: Sequelize.STRING(10) },
    state: { field: 'estadoUso', type: Sequelize.STRING(50) },
    tax: { field: 'valImpuesto', type: Sequelize.INTEGER },
    comment: { field: 'notas', type: Sequelize.STRING(255) },
    subsidiary_id: { field: 'sucursal', type: Sequelize.TINYINT },
    user_id: { field: 'rutUsuario', type: Sequelize.STRING(12) },
}, {
    sequelize: config,
    modelName: 'facturas',
    freezeTableName: true,
    timestamps: false
}
)
Provider.hasMany(InvoiceModel, { foreignKey: 'provRut', sourceKey: 'rut' });
InvoiceModel.hasOne(Provider, { foreignKey: 'rut', sourceKey: 'provRut', as: 'provider' });
TypeOfDocument.hasMany(InvoiceModel, { foreignKey: 'idTipoDocIn', sourceKey: 'id' });
InvoiceModel.hasOne(TypeOfDocument, { foreignKey: 'id', sourceKey: 'idTipoDocIn', as: 'typeOfDocument' });
