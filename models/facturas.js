/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facturas', {
    idFact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NFactura: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    ProvRut: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'proveedor',
        key: 'ProvRut'
      }
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'cs_usuarios',
        key: 'rut'
      }
    },
    estadoUso: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'EP'
    },
    valImpuesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idTipoDocIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipoDocIn',
        key: 'idTipoDocIn'
      }
    },
    notas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sucursal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    }
  }, {
    tableName: 'facturas'
  });
};
