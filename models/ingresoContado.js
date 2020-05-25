/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ingresoContado', {
    idIngresoContado: {
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
    nombreComprador: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numCorrelativo: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'ingresoContado'
  });
};
