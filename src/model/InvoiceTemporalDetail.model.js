const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
import ArticleModel from './Article.model';
import WarehouseModel from './Warehouse.model';
const Model = Sequelize.Model;

class InvoiceTemporalDetailModel extends Model {
}

module.exports = InvoiceTemporalDetailModel;

InvoiceTemporalDetailModel.init({
    id: {
        field: 'ID', type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    article_id: {
        field: 'idArticulo', type: Sequelize.STRING(50),
        references: {
            model: 'articulos',
            key: 'idArticulo'
        }
    },
    createdAt: {field: 'fechaIng', type: Sequelize.INTEGER, defaultValue: new Date().toISOString()},
    amount: {field: 'artValor', type: Sequelize.NUMBER},
    quantity: {field: 'artCantidad', type: Sequelize.NUMBER},
    invoice_id: {field: 'idFact', type: Sequelize.INTEGER},
    expiration_date: {field: 'vencimiento', type: Sequelize.DATE},
    subsidiary_id: {field: 'idSucursal', type: Sequelize.TINYINT},
    warehouse_id: {
        field: 'idBodega', type: Sequelize.INTEGER,
        references: {
            model: 'bodega',
            key: 'idBodega'
        }
    }
}, {
    sequelize: config,
    modelName: 'tempArt',
    freezeTableName: true,
    timestamps: false, initialAutoIncrement: false
});

InvoiceTemporalDetailModel.belongsTo(ArticleModel, { foreignKey: 'idArticulo', as: 'article' });
InvoiceTemporalDetailModel.belongsTo(WarehouseModel, { foreignKey: 'idBodega', as: 'warehouse' });

