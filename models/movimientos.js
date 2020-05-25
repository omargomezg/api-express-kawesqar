/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimientos', {
    idMovimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idTipoMovimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoMovimiento',
        key: 'idTipoMovimiento'
      }
    }
  }, {
    tableName: 'movimientos'
  });
};
