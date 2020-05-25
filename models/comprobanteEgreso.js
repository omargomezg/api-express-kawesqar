/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comprobanteEgreso', {
    idFolio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rut_cli: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'rut'
      }
    },
    idTipoPago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoPago',
        key: 'idTipoPago'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '1'
    },
    usoCredito: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    estadoCredito: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    tipoVenta: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nDocumento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idTurno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'turnoVenta',
        key: 'idTurno'
      }
    },
    descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '((0))'
    },
    notas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rutUsuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    idSucursal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    },
    idSubGrupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subGrupo',
        key: 'idSubGrupo'
      }
    },
    idIngresoContado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idtVenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipoEgreso',
        key: 'idtVenta'
      }
    },
    bodega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'bodega',
        key: 'idBodega'
      }
    },
    sucursalDestino: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cs_sucursales',
        key: 'idSucursal'
      }
    }
  }, {
    tableName: 'comprobanteEgreso'
  });
};
