/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cs_relacion_usuarioSucursal', {
    idRelacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
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
      allowNull: false,
      defaultValue: '1'
    },
    isSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cs_relacion_usuarioSucursal'
  });
};
