/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TempCarro', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
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
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    }
  }, {
    tableName: 'TempCarro'
  });
};
