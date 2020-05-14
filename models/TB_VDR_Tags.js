/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_VDR_Tags', {
    TAGS_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TAGS_Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TAGS_Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'TB_VDR_Tags'
  });
};
