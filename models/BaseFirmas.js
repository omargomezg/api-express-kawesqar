/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BaseFirmas', {
    IdBaseFirma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Campo1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'BaseFirmas'
  });
};
