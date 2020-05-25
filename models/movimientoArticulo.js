/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimientoArticulo', {
    idMovimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: "NCHAR",
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
    tableName: 'movimientoArticulo'
  });
};
