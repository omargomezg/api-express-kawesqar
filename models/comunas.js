/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comunas', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    padre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'provincias',
        key: 'codigo'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'comunas'
  });
};
