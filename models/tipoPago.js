/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoPago', {
    idTipoPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: "NCHAR",
      allowNull: false,
      defaultValue: '(NDescripción del tipo de venta, por ejemplo cheque, contado, documento, etc...'
    },
    usoBoleta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    usoFactura: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tipoPago'
  });
};
