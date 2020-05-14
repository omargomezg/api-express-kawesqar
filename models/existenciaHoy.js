/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('existenciaHoy', {
    nomArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    artValor: {
      type: "MONEY",
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subTotal: {
      type: "MONEY",
      allowNull: true
    },
    medida: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'existenciaHoy'
  });
};
