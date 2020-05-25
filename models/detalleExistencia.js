/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalleExistencia', {
    idDetalleExistencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idExistencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'existencia',
        key: 'idExistencia'
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorUnitario: {
      type: "MONEY",
      allowNull: false
    },
    esGranel: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idbodega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bodega',
        key: 'idBodega'
      }
    }
  }, {
    tableName: 'detalleExistencia'
  });
};
