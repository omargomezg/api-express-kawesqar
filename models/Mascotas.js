/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mascotas', {
    IdMascota: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    RutCliente: {
      type: DataTypes.STRING,
      allowNull: true
    },
    NombreMascota: {
      type: "NCHAR",
      allowNull: true
    },
    Sexo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Especie: {
      type: DataTypes.STRING,
      allowNull: true
    },
    FNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Peso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Nota: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Imagen: {
      type: "IMAGE",
      allowNull: true
    }
  }, {
    tableName: 'Mascotas'
  });
};
