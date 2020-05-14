/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subGrupo', {
    idSubGrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    padre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Grupo',
        key: 'idGrupo'
      }
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'subGrupo'
  });
};
