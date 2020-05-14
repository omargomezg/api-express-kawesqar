/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('egresosPermitidosAlUsuario', {
    estadoRel: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    descripcion: {
      type: "NCHAR",
      allowNull: false
    },
    idtVenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: true
    },
    selDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'egresosPermitidosAlUsuario'
  });
};
