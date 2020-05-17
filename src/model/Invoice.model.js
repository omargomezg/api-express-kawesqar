import { Model as _Model, INTEGER, CHAR, DATE, STRING, TINYINT } from 'sequelize';
const config = require('../config/config').sequelize();
const Model = _Model;
import moment from 'moment';

class InvoiceModel extends Model {
}

export default InvoiceModel;

InvoiceModel.init({
    id: {
        field: 'idFact',
        type: INTEGER,
        primaryKey: true, autoIncrement: true
    },
    document_number: {
        field: 'NFactura',
        type: CHAR(10)
    },
    emission_date: {
        field: 'Fecha', type: DATE,
        get() {
            return moment(this.getDataValue('Fecha')).format('DD-MM-YYYY');
        }
    },
    provider_id: {
        field: 'provRut', type: STRING(10), allowNull: false
    },
    state: { field: 'estadoUso', type: STRING(50) },
    tax: { field: 'valImpuesto', type: INTEGER },
    comment: { field: 'notas', type: STRING(255) },
    subsidiary_id: { field: 'sucursal', type: TINYINT },
    user_id: { field: 'rutUsuario', type: STRING(12) },
    typeOfDocument: {
        field: 'idTipoDocIn',
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'tipoDocIn',
            key: 'idTipoDocIn'
        }
    }
}, {
    sequelize: config,
    modelName: 'facturas',
    freezeTableName: true,
    timestamps: false
})
