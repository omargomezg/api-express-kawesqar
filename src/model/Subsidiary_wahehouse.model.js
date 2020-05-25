import { Model as _Model, INTEGER, CHAR, DATE, STRING, TINYINT, BOOLEAN } from 'sequelize';
import WarehouseModel from './Warehouse.model';
import Subsidiary from './Subsidiary.model';
const config = require('../config/config').sequelize();
const Model = _Model;
import moment from 'moment';

class Subsidiary_WarehouseModel extends Model {
}

export default Subsidiary_WarehouseModel;

Subsidiary_WarehouseModel.init({
    id: {
        field: 'idBodegaSucursal',
        type: INTEGER,
        primaryKey: true, autoIncrement: true
    },
    subsidiary_id: {
        field: 'idSucursal',
        type: INTEGER,
        references: {
            model: 'cs_sucursales',
            key: 'idSucursal'
        }
    },
    warehouse_id: {
        field: 'idBodega',
        type: TINYINT,
        references: {
            model: 'bodega',
            key: 'idBodega'
        }
    },
    state: {
        field: 'estado',
        type: BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: config,
    modelName: 'bodega_sucursal',
    freezeTableName: true,
    timestamps: false
})


Subsidiary_WarehouseModel.belongsTo(WarehouseModel, { foreignKey: 'idBodega', as: 'warehouse' });
Subsidiary_WarehouseModel.belongsTo(Subsidiary, { foreignKey: 'idSucursal', as: 'subsidiary' });