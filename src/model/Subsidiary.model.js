import { Model as _Model, INTEGER, CHAR, DATE, STRING, TINYINT, BOOLEAN, NUMBER } from 'sequelize';
import TypeOfDocument, { hasMany as _hasMany } from './TypeOfDocument.model';
const Model = _Model;
const config = require('../config/config').sequelize();

class SubsidiaryModel extends Model {
}

export default SubsidiaryModel;

SubsidiaryModel.init({
    id: {
        field: 'idSucursal', type: TINYINT,
        primaryKey: true,
        autoIncrement: true
    },
    rut: {
        field: 'rutSucursal',
        type: STRING(12),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        field: 'nombre', type: STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        } },
    address: { field: 'direccion', type: STRING(80) },
    commune: {
        field: 'codigo', type: INTEGER,
        references: {
            model: 'comunas',
            key: 'codigo'
        }
    },
    telephone: { field: 'telefono', type: STRING(50) },
    fax: { field: 'fax', type: STRING(50) },
    legalRepresentative_rut: { field: 'rutRepLegal', type: STRING(12)},
    legalRepresentative_name: { field: 'nombreRepLegal', type: STRING(50) },
    cashRegister_isActive: { field: 'registroContado', type: BOOLEAN },
    cashRegister_value: {field: 'numInicialRegContado', type: NUMBER, defaultValue: null}
}, {
    sequelize: config,
    modelName: 'cs_sucursales',
    freezeTableName: true,
    timestamps: false
});
