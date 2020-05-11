const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class Invoice extends Model {
}

module.exports = Invoice;

Invoice.init({
        id: {
            field: 'idFact',
            type: Sequelize.INTEGER,
            primaryKey: true, autoIncrement: true
        },
        document_number: {
            field: 'NFactura',
            type: Sequelize.CHAR(10)
        },
        supplier_id: {
            field: 'ProvRut',
            type: Sequelize.STRING(10)
        },
        emission_date: {
            field: 'Fecha', type: Sequelize.DATE
        },
        state: {
            field: 'estadoUso', type: Sequelize.STRING(50)
        },
        tax: {field: 'valImpuesto', type: Sequelize.INTEGER},
        document_type_id: {field: 'idTipoDocIn', type: Sequelize.INTEGER},
        comment: {field: 'notas', type: Sequelize.STRING(255)},
        subsidiary_id: {field: 'sucursal', type: Sequelize.TINYINT},
    }, {
        sequelize: config,
        modelName: 'facturas',
        freezeTableName: true,
        timestamps: false
    }
)
