const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class TurnModel extends Model {
}

module.exports = TurnModel;

TurnModel.init({
    id: {
        field: 'idTurno', type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        field: 'rut', type: Sequelize.STRING(12),
        references: {
            model: 'cs_usuarios',
            key: 'rut'
        }
    },
    createdAt: {field: 'inicioTurno', type: Sequelize.DATE},
    end: {field: 'finTurno', type: Sequelize.DATE},
    isActive: {field: 'estado', type: Sequelize.CHAR(1)},
}, {
    sequelize: config,
    modelName: 'turnoVenta',
    freezeTableName: true,
    timestamps: true,
    updatedAt: false
});
