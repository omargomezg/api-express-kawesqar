/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincias', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    padre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      references: {
        model: 'regiones',
        key: 'codigo'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '(NULL)'
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'provincias'
  });
};
