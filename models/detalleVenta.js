/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleVenta', {
    idDetalleVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idFolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comprobanteEgreso',
        key: 'idFolio'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
    },
    valorTotal: {
      type: "MONEY",
      allowNull: false
    },
    vGranel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    idArticuloID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vCosto: {
      type: "MONEY",
      allowNull: true
    },
    f: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'detalleVenta'
  });
};
