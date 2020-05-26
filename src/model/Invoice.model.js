import {CHAR, DATE, INTEGER, Model as _Model, STRING, TINYINT} from 'sequelize';
import moment from 'moment';
import InvoiceDetailModel from "./InvoiceDetail.model";
import ProviderModel from "./Provider.model";
import UserModel from "./User.model";
import TypeOfDocumentModel from "./TypeOfDocument.model";

const config = require('../config/config').sequelize();
const Model = _Model;

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
            return moment(this.getDataValue('emission_date')).format('DD-MM-YYYY');
        }
    },
    createdAt: {
        field: 'fechaIngreso', type: DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
        }
    },
    provider_id: {
        field: 'provRut',
        type: STRING(10),
        allowNull: false,
        references: {
            model: 'proveedor',
            key: 'provRut'
        }
    },
    state: { field: 'estadoUso', type: STRING(50) },
    tax: { field: 'valImpuesto', type: INTEGER },
    comment: { field: 'notas', type: STRING(255) },
    subsidiary_id: { field: 'sucursal', type: TINYINT },
    user_id: {
        field: 'rutUsuario',
        type: STRING(12),
        references: {
            model: 'cs_usuarios',
            key: 'rut'
        }
    },
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
    timestamps: true,
    updatedAt: false
});

InvoiceModel.belongsTo(ProviderModel, {foreignKey: 'provRut', as: 'provider'});
InvoiceModel.belongsTo(UserModel, {foreignKey: 'rutUsuario', as: 'user'});
InvoiceModel.belongsTo(TypeOfDocumentModel, { foreignKey: 'idTipoDocIn', as: 'document' })
InvoiceModel.hasMany(InvoiceDetailModel, {foreignKey: 'idFact', as: 'detail'})