/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipoEgreso_Usuario', {
    idtVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoEgreso',
        key: 'idtVenta'
      }
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    selDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    id: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'tipoEgreso_Usuario'
  });
};
