const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class ProviderModel extends Model {
}

module.exports = ProviderModel;

ProviderModel.init({
    rut: {
        field: 'provRut', type: Sequelize.STRING(10),
        primaryKey: true
    },
    name: {field: 'provNombre', type: Sequelize.STRING(150)},
    phone_numberFirst: {field: 'provFono', type: Sequelize.STRING(15)},
    phone_numberSecond: {field: 'provFax', type: Sequelize.STRING(15)},
    phone_numberThird: {field: 'provCelular', type: Sequelize.STRING(15)},
    address: {field: 'provDireccion', type: Sequelize.STRING(50)},
    email: {field: 'provMail', type: Sequelize.STRING(50)},
    website: {field: 'provWeb', type: Sequelize.STRING(50)},
    commune_id: {field: 'codigo', type: Sequelize.INTEGER},
    alias: {field: 'provAbreviacion', type: Sequelize.STRING(10)}
}, {
    sequelize: config,
    modelName: 'proveedor',
    freezeTableName: true,
    timestamps: false
});
