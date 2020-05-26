import {BOOLEAN, CHAR, DATE, INTEGER, Model as _Model, NUMBER, STRING} from 'sequelize';
import MeasureModel from './Measure.model';
const config = require('../config/config').sequelize();

const Model = _Model;

class ArticleModel extends Model {
}

export default ArticleModel;

ArticleModel.init({
    id: {
        field: 'idArticulo',
        type: STRING,
        primaryKey: true,
        validate: {
            notEmpty: true
        }

    },
    name: {
        field: 'nomArticulo',
        type: CHAR(10)
    },
    measure_id: {
        field: 'idMedida',
        type: INTEGER,
        allowNull: false,
        references: {
            model: 'medidas',
            key: 'idMedida'
        }
    },
    active: { field: 'estado', type: BOOLEAN, defaultValue: true },
    alertStatus: { field: 'alerta', type: BOOLEAN },
    use_expiration_date: {
        field: 'vencimiento',
        type: BOOLEAN
    },
    second_id: {
        field: 'id', type: INTEGER, autoIncrement: true
    },
    comment: {
        field: 'notas', type: STRING
    },
    profit: { field: 'ganancia', type: NUMBER },
    family: {
        field: 'idFamilia', type: INTEGER,
        allowNull: false,
        references: {
            model: 'familia',
            key: 'idFamilia'
        }
    },
    bulkPrice: { field: 'precioGranel', type: INTEGER },
    hasInventory: { field: 'usaInventario', type: BOOLEAN, defaultValue: false },
    sheet: { field: 'folio', type: INTEGER },
    updatedAt: { field: 'lastUpdate', type: DATE }
}, {
    sequelize: config,
    modelName: 'articulos',
    freezeTableName: true,
    timestamps: true,
    createdAt: false
});

ArticleModel.belongsTo(MeasureModel, { foreignKey: 'idMedida', as : 'measure'});