const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class InvoiceDetailModel extends Model {
}

module.exports = InvoiceDetailModel;

InvoiceDetailModel.init({
    id: {
        field: 'ID', type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    article_id: {field: 'idArticulo', type: Sequelize.STRING(50)},
    createdAt: {field: 'fechaIng', type: Sequelize.INTEGER, defaultValue: new Date().toISOString()},
    amount: {field: 'artValor', type: Sequelize.NUMBER},
    quantity: {field: 'artCantidad', type: Sequelize.NUMBER},
    invoice_id: {field: 'idFact', type: Sequelize.INTEGER},
    expiration_date: {field: 'vencimiento', type: Sequelize.DATE},
    subsidiary_id: {field: 'idSucursal', type: Sequelize.TINYINT},
    warehouse_id: {field: 'idBodega', type: Sequelize.INTEGER}
}, {
    sequelize: config,
    modelName: 'tempArt',
    freezeTableName: true,
    timestamps: false, initialAutoIncrement: false
});

