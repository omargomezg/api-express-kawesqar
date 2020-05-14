/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chequePago', {
    idChequePago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    numero: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    idBanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bancos',
        key: 'idBanco'
      }
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    telefono: {
      type: "NCHAR",
      allowNull: true
    },
    nombrePersona: {
      type: DataTypes.STRING,
      allowNull: true
    },
    IdFolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comprobanteEgreso',
        key: 'idFolio'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'chequePago'
  });
};
