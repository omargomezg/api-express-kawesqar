/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartolaProducto', {
    idCP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    idMovimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movimientoArticulo',
        key: 'idMovimiento'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valor: {
      type: "MONEY",
      allowNull: false,
      defaultValue: '((0))'
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
    }
  }, {
    tableName: 'cartolaProducto'
  });
};
