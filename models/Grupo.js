/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grupo', {
    idGrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nomGrupo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Grupo'
  });
};
