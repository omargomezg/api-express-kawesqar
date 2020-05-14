/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cs_relacion_usuarioRol', {
    idRelacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cs_rol',
        key: 'idRol'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'cs_relacion_usuarioRol'
  });
};
