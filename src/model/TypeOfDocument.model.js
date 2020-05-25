import { Model as _Model, INTEGER, STRING, BOOLEAN } from 'sequelize';
const config = require('../config/config').sequelize();
const Model = _Model;

class TypeOfDocumentModel extends Model {
}

export default TypeOfDocumentModel;

TypeOfDocumentModel.init({
    id: {field: 'idTipoDocIn', type: INTEGER, primaryKey: true},
    name: {field: 'descripcion', type: STRING(50)},
    isActive: {field: 'estado', type: BOOLEAN}
}, {
    sequelize: config,
    modelName: 'tipoDocIn',
    freezeTableName: true,
    timestamps: false
});