/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tab_CliUnionGrupo', {
    Rut_cli: {
      type: DataTypes.STRING,
      allowNull: false
    },
    IdGrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Grupo',
        key: 'idGrupo'
      }
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'Tab_CliUnionGrupo'
  });
};
