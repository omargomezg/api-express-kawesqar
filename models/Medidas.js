/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Medidas', {
    IdMedida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomMedida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomPlural: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'Medidas'
  });
};
