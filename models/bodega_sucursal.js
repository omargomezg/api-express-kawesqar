/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bodega_sucursal', {
    idBodegaSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bodega',
        key: 'idBodega'
      }
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'bodega_sucursal'
  });
};
