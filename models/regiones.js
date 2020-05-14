/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regiones', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '(NULL)'
    },
    idRomano: {
      type: "NCHAR",
      allowNull: false,
      defaultValue: '0'
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'regiones'
  });
};
