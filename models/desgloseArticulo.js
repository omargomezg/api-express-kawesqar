/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('desgloseArticulo', {
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    FechaIng: {
      type: DataTypes.DATE,
      allowNull: false
    },
    artValor: {
      type: "MONEY",
      allowNull: false
    },
    idFact: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    estadoUso: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    },
    granel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    granelOriginal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bodega',
        key: 'idBodega'
      }
    }
  }, {
    tableName: 'desgloseArticulo'
  });
};
