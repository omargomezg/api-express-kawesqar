/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedor', {
    ProvRut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    ProvNombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ProvFono: {
      type: "NCHAR",
      allowNull: true
    },
    ProvFax: {
      type: "NCHAR",
      allowNull: true
    },
    ProvCelular: {
      type: "NCHAR",
      allowNull: true
    },
    ProvDireccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProvMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProvWeb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProvEstado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comunas',
        key: 'codigo'
      }
    },
    ProvAbreviacion: {
      type: "NCHAR",
      allowNull: true
    }
  }, {
    tableName: 'proveedor'
  });
};
