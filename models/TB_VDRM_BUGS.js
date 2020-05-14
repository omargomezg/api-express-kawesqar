/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_VDRM_BUGS', {
    BUGS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    BUGS_FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    BUGS_DETALLE: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    BUGS_ORIGEN: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'TB_VDRM_BUGS'
  });
};
