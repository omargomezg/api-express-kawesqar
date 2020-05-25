/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bancos', {
    idBanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'bancos'
  });
};
