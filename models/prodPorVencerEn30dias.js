/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prodPorVencerEn30dias', {
    nomArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Expr1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'prodPorVencerEn30dias'
  });
};
