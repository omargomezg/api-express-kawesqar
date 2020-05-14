/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resumenEntregaInterna', {
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ValorCosto: {
      type: "MONEY",
      allowNull: true
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cefecha: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idSubGrupo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'resumenEntregaInterna'
  });
};
