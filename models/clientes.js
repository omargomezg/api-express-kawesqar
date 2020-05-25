/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondLastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fono: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Fingreso: {
      type: DataTypes.DATE,
      allowNull: false
    },
    MaxCredito: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '((0))'
    },
    permiteVentaCredito: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    permiteVentaFactura: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    nombreFantasia: {
      type: DataTypes.STRING,
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
    giro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idTcliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((1))',
      references: {
        model: 'tipoCliente',
        key: 'idTcliente'
      }
    }
  }, {
    tableName: 'clientes'
  });
};
