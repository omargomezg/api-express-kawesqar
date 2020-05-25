import Sequelize from 'sequelize';
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class DocumentModel extends Model { }

module.exports = DocumentModel;

DocumentModel.init({
    id: {
        field: 'idTipoDocIn',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'descripcion',
        type: Sequelize.STRING(50)
    },
    isActive: {
        field: 'estado',
        type: Sequelize.BOOLEAN
    }
}, {
    sequelize: config,
    modelName: 'tipoDocIn',
    freezeTableName: true,
    timestamps: false
});