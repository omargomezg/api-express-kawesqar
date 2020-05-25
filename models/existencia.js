/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('existencia', {
    idExistencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'existencia'
  });
};
