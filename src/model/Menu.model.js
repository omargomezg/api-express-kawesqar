const Sequelize = require('sequelize');
const config = require('../config/config').sequelize();
const Model = Sequelize.Model;

class MenuModel extends Model {
}

module.exports = MenuModel;

MenuModel.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    parent: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        field: 'texto',
        type: Sequelize.STRING(50),
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    sequelize: config,
    modelName: 'menu',
    freezeTableName: true,
    timestamps: false
});
