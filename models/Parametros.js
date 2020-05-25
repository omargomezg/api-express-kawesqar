/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parametros', {
    PARA_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PARA_IdGrupo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARA_IdDetalle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARA_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Parametros'
  });
};
