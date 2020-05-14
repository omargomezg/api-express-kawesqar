/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulos', {
    idArticulo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nomArticulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idMedida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Medidas',
        key: 'IdMedida'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    Alerta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    estadoAlerta: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    vencimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Notas: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Sin Observaciones'
    },
    ganancia: {
      type: "MONEY",
      allowNull: true,
      defaultValue: '((0))'
    },
    idFamilia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'familia',
        key: 'idFamilia'
      }
    },
    precioGranel: {
      type: "SMALLMONEY",
      allowNull: true,
      defaultValue: '((0))'
    },
    idMedidaGranel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Medidas',
        key: 'IdMedida'
      }
    },
    usaInventario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    },
    folio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    img_file: {
      type: "IMAGE",
      allowNull: true
    },
    img_content_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastUpdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'articulos'
  });
};
