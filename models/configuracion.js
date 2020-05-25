/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configuracion', {
    NombreProyecto: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Membrete: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smtpMail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    puertoMail: {
      type: "NCHAR",
      allowNull: true
    },
    usuarioMail: {
      type: "NCHAR",
      allowNull: true
    },
    claveMail: {
      type: "NCHAR",
      allowNull: true
    },
    sslMail: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    imgLogo: {
      type: "IMAGE",
      allowNull: true
    },
    logoCodesoft: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'configuracion'
  });
};
