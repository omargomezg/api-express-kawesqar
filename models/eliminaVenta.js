/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eliminaVenta', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idFolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comprobanteEgreso',
        key: 'idFolio'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    motivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    }
  }, {
    tableName: 'eliminaVenta'
  });
};
