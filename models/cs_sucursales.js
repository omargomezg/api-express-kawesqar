/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cs_sucursales', {
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rutSucursal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comunas',
        key: 'codigo'
      }
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rutRepLegal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombreRepLegal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Giro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    registroContado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    numInicialRegContado: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    lastUpdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    }
  }, {
    tableName: 'cs_sucursales'
  });
};
