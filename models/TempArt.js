/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TempArt', {
    ID: {
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
    FechaIng: {
      type: DataTypes.DATE,
      allowNull: false
    },
    artValor: {
      type: "MONEY",
      allowNull: false
    },
    ArtCantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IdFact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'facturas',
        key: 'idFact'
      }
    },
    Vencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bodega',
        key: 'idBodega'
      }
    }
  }, {
    tableName: 'TempArt'
  });
};
