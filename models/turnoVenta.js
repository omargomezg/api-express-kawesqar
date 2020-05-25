/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('turnoVenta', {
    idTurno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inicioTurno: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finTurno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'turnoVenta'
  });
};
