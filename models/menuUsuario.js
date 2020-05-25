/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menuUsuario', {
    idMenuUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'menu',
        key: 'id'
      }
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'menuUsuario'
  });
};
