/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MascotaControl', {
    IdControl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Mascota: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      references: {
        model: 'Mascotas',
        key: 'IdMascota'
      }
    },
    RutCliente: {
      type: "NCHAR",
      allowNull: false
    },
    FControl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PControl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Indicaciones: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Tratamiento: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ProxVacuna: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'MascotaControl'
  });
};
