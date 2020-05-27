import { CHAR, DATE, INTEGER, Model as _Model, STRING, TINYINT, BOOLEAN, NUMBER } from 'sequelize';
import moment from 'moment';
import ArticleModel from "./Article.model";
import SubsidiaryModel from "./Subsidiary.model";
import UserModel from "./User.model";
import WarehouseModel from "./Warehouse.model";
import Jwt from "../services/jwt";

const config = require('../config/config').sequelize();
const Model = _Model;

class ItemBreakdownModel extends Model {
}

export default ItemBreakdownModel;

ItemBreakdownModel.init({
    id: {
        field: 'id',
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    article_id: {
        field: 'idArticulo',
        type: STRING(50),
        allowNull: false,
        references: {
            model: 'articulos',
            key: 'idArticulo'
        }
    },
    createdAt: {
        field: 'fechaIng', type: DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
        }
    },
    amount: { field: 'artValor', type: NUMBER, allowNull: false },
    invoice_id: {
        field: 'idFact', type: INTEGER,
        allowNull: false,
        references: {
            model: 'facturas',
            key: 'idFact'
        }
    },
    expiration_date: { field: 'vencimiento', type: DATE },
    subsidiary_id: {
        field: 'idSucursal', type: TINYINT,
        references: {
            model: 'cs_sucursales',
            key: 'idSucursal'
        }
    },
    bulk_sale: {
        field: 'estado',
        type: BOOLEAN,
        defaultValue: true
    },
    in_use: {
        field: 'estadoUso',
        type: BOOLEAN,
        defaultValue: false
    },
    user_id: {
        field: 'rutUsuario',
        type: STRING(12),
        references: {
            model: 'cs_usuarios',
            key: 'rut'
        }
    },
    bulk: { field: 'granel', type: INTEGER, defaultValue: 0 },
    original_bulk: { field: 'granelOriginal', type: INTEGER },
    warehouse_id: {
        field: 'idBodega', type: INTEGER, references: {
            model: 'bodega',
            key: 'idBodega'
        }
    },
}, {
    sequelize: config,
    modelName: 'desgloseArticulo',
    freezeTableName: true,
    timestamps: true,
    updatedAt: false
});

ItemBreakdownModel.belongsTo(SubsidiaryModel, { foreignKey: 'idSucursal', as: 'subsidiary' });
ItemBreakdownModel.belongsTo(UserModel, { foreignKey: 'rutUsuario', as: 'user' });
ItemBreakdownModel.belongsTo(ArticleModel, { foreignKey: 'idArticulo', as: 'article' });
ItemBreakdownModel.belongsTo(WarehouseModel, { foreignKey: 'idBodega', as: 'warehouse' });