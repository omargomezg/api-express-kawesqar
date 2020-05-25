import { Model as _Model, INTEGER, CHAR, DATE, STRING, TINYINT, BOOLEAN } from 'sequelize';
import SubsidiaryModel from './Subsidiary.model';
import FamilyModel from './Family.model';
const config = require('../config/config').sequelize();
const Model = _Model;
import moment from 'moment';

class Subsidiary_FamilyModel extends Model {
}

export default Subsidiary_FamilyModel;

Subsidiary_FamilyModel.init({
    id: {
        field: 'id',
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subsidiary_id: {
        field: 'idSucursal',
        type: INTEGER,
        references: {
            model: 'cs_sucursales',
            key: 'idSucursal'
        }
    },
    family_id: {
        field: 'idFamilia',
        type: TINYINT,
        references: {
            model: 'familia',
            key: 'idFamilia'
        }
    },
    state: {
        field: 'estado',
        type: BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: config,
    modelName: 'sucursalAsociada',
    freezeTableName: true,
    timestamps: false
})


Subsidiary_FamilyModel.belongsTo(FamilyModel, { foreignKey: 'idFamilia', as: 'family' });
Subsidiary_FamilyModel.belongsTo(SubsidiaryModel, { foreignKey: 'idSucursal', as: 'subsidiary' });