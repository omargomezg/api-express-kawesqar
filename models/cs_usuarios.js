/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cs_usuarios', {
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
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    clave: {
      type: "VARBINARY",
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagenPerfil: {
      type: "IMAGE",
      allowNull: true
    },
    imagenTipo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fono: {
      type: "NCHAR",
      allowNull: true
    },
    eMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salidaVenta: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    salidaFactura: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    salidaEmpleados: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    traspaso: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    credito: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    discount: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '(getdate())'
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cs_usuarios'
  });
};
