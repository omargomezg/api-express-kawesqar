import {DATE, BOOLEAN, INTEGER, Model as _Model, NUMBER, STRING, TINYINT} from 'sequelize';
import CommuneModel from "./Commune.model";

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
        }
    },
    address: {field: 'direccion', type: STRING(80), defaultValue: ''},
    commune_id: {
        field: 'codigo', type: INTEGER, allowNull: false,
        references: {
            model: 'comunas',
            key: 'codigo'
        }
    },
    telephone: {field: 'telefono', type: STRING(50)},
    fax: {field: 'fax', type: STRING(50), defaultValue: ''},
    legalRepresentative_rut: {field: 'rutRepLegal', type: STRING(12)},
    legalRepresentative_name: {field: 'nombreRepLegal', type: STRING(50)},
    cashRegister_isActive: {field: 'registroContado', type: BOOLEAN, defaultValue: false},
    cashRegister_value: {field: 'numInicialRegContado', type: NUMBER, defaultValue: null},
    updatedAt: { field: 'lastUpdate', type: DATE }
}, {
    sequelize: config,
    modelName: 'cs_sucursales',
    freezeTableName: true,
    timestamps: true,
    createdAt: false
});

SubsidiaryModel.belongsTo(CommuneModel, {foreignKey: 'codigo', as: 'commune'});
