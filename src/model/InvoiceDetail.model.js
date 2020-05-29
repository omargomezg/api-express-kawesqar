const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;
import ArticleModel from '../model/Article.model'

class InvoiceDetailModel extends Model {
}

module.exports = InvoiceDetailModel;

InvoiceDetailModel.init({
    id: {
        field: 'idDetalle', type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    invoice_id: { field: 'idFact', type: Sequelize.INTEGER, allowNull: false, references: { model: 'facturas', key: 'idFact' } },
    article_id: { field: 'idArticulo', type: Sequelize.STRING(50), allowNull: false, references: { model: 'articulos', key: 'idArticulo' } },
    amount: { field: 'valUnitario', type: Sequelize.NUMBER, allowNull: false },
    quantity: { field: 'cantidad', type: Sequelize.NUMBER, allowNull: false }
}, {
    sequelize: config,
    modelName: 'detalleFactura',
    freezeTableName: true,
    timestamps: false,
    initialAutoIncrement: false
});

InvoiceDetailModel.belongsTo(ArticleModel, { foreignKey: 'idArticulo', as: 'article'})
