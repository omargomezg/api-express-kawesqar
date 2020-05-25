/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimientosProductos', {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    movimiento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: "MONEY",
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saldo: {
      type: "MONEY",
      allowNull: false
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comentarios: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codArticulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idCP: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'movimientosProductos'
  });
};
