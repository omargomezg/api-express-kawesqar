/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sucursalAsociada', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    },
    idFamilia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'familia',
        key: 'idFamilia'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'sucursalAsociada'
  });
};
