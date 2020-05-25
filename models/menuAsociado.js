/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menuAsociado', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'menuAsociado'
  });
};
