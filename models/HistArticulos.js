/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HistArticulos', {
    IdFolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comprobanteEgreso',
        key: 'idFolio'
      }
    },
    IdArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'articulos',
        key: 'idArticulo'
      }
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FechaIng: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ArtValor: {
      type: "MONEY",
      allowNull: false
    },
    IdFact: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facturas',
        key: 'idFact'
      }
    },
    Vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '01/01/1900 0:00:00'
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    estadoUso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    rutusuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    granelOriginal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idtable: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'HistArticulos'
  });
};
