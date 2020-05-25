/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrito', {
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: "MONEY",
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idArticuloID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Medida: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'carrito'
  });
};
