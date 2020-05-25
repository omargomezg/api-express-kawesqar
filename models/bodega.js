/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bodega', {
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'bodega'
  });
};
