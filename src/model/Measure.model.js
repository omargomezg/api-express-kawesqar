import Sequelize from 'sequelize';
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class MeasureModel extends Model { }

module.exports = MeasureModel;

MeasureModel.init({
    id: {
        field: 'idMedida',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'nomMedida',
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    plural_name: {
        field: 'nomPlural',
        type: Sequelize.STRING(50)
    },
    updatedAt: {
        field: 'lastupdate',
        type: Sequelize.DATE
    }
}, {
    sequelize: config,
    modelName: 'medidas',
    freezeTableName: true,
    timestamps: true,
    createdAt: false
});