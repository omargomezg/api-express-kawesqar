import { Model as _Model, INTEGER, CHAR, DATE, STRING, TINYINT, BOOLEAN } from 'sequelize';
const config = require('../config/config').sequelize();
const Model = _Model;

class FamilyModel extends Model {
}

export default FamilyModel;

FamilyModel.init({
    id: {
        field: 'idFamilia',
        type: INTEGER,
        primaryKey: true, autoIncrement: true
    },
    name: {
        field: 'nomFamilia',
        type: STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    code: {type: STRING(10)},
    isActive: { field: 'estado', type: BOOLEAN, defaultValue: true}
}, {
    sequelize: config,
    modelName: 'familia',
    freezeTableName: true,
    timestamps: false
})
