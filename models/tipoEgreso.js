/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoEgreso', {
    idtVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: "NCHAR",
      allowNull: false
    },
    codigo: {
      type: "NCHAR",
      allowNull: false
    }
  }, {
    tableName: 'tipoEgreso'
  });
};
