/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartola', {
    idCartola: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idMovimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movimientos',
        key: 'idMovimiento'
      }
    },
    valor: {
      type: "MONEY",
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    saldo: {
      type: "MONEY",
      allowNull: false
    },
    rutCliente: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'rut'
      }
    },
    idFolio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comprobanteEgreso',
        key: 'idFolio'
      }
    }
  }, {
    tableName: 'cartola'
  });
};
