/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('msjeSistema', {
    idMensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    textMensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'sin especificar'
    }
  }, {
    tableName: 'msjeSistema'
  });
};
