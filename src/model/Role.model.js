const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class RoleModel extends Model {
}

module.exports = RoleModel;

RoleModel.init({
    id: {
        field: 'idRol', type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: { field: 'titulo', type: Sequelize.STRING(50) },
    description: { field: 'descripcion', type: Sequelize.STRING(50) },
    isActive: { field: 'estado', type: Sequelize.BOOLEAN },
    canSell: { field: 'accesoVenta', type: Sequelize.BOOLEAN },
    maxDiscount: { field: 'valorDescuento', type: Sequelize.INTEGER },
    canAccesADminSell: { field: 'ventAdmin', type: Sequelize.BOOLEAN },
    isDefault: { field: 'isDefault', type: Sequelize.BOOLEAN }
}, {
    sequelize: config,
    modelName: 'cs_rol',
    freezeTableName: true,
    timestamps: false
});
