/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleFactura', {
    idDetalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idFact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'facturas',
        key: 'idFact'
      }
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
    },
    valUnitario: {
      type: "MONEY",
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'detalleFactura'
  });
};
