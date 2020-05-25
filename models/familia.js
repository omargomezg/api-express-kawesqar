/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familia', {
    idFamilia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NomFamilia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'familia'
  });
};
