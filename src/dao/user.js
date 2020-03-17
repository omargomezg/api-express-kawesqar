const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getSucursalByRut: (rut, callback) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`
                select	cs_sucursales.idSucursal id,
                        cs_sucursales.rutSucursal rut,
                        cs_sucursales.nombre nombre,
                        cs_sucursales.direccion direccion,
                        cs_sucursales.codigo comuna_id,
                        cs_sucursales.telefono telefono,
                        cs_sucursales.fax celular,
                        cs_sucursales.Giro giro,
                        cs_sucursales.registroContado registroContado_isActive,
                        cs_sucursales.numInicialRegContado registroContado_initialNumber,
                        cs_sucursales.rutRepLegal representante_rut,
                        cs_sucursales.nombreRepLegal representante_nombre,
                        cs_sucursales.lastUpdate lastUpdate
                from cs_relacion_usuarioSucursal inner join cs_sucursales on cs_sucursales.idSucursal = cs_relacion_usuarioSucursal.idSucursal
                where rutUsuario = '${rut}' and isselected = 1`)
            })
            .then(result => {
                if (result.recordset[0] === undefined) {
                    this.setPrimarySucursal(0, rut);
                }
                callback(result.recordset[0]);
            })
            .catch(err => {
                callback(err);
            });
    },
    setPrimarySucursal: (idSucursal, rut, callback) => {
        sql
            .connect(config.config())
            .then(pool => {
                return pool.request()
                    .query(`
                    declare @id as tinyint;
                    set @id = ${idSucursal};
                    if @id = 0 begin
                        set @id = (select top(1) idSucursal from cs_relacion_usuarioSucursal where rutUsuario = '${rut}') 
                    end
                    update cs_relacion_usuarioSucursal set isselected = 0 where rutUsuario = '${rut}';
                    update cs_relacion_usuarioSucursal set isselected = 0 where rutUsuario = '${rut}' and idSucursal = @id;
                    select @id as id;`)
            })
            .then(result => {
                callback(result.recordset[0]);
            })
            .catch(err => {
                callback(err);
            });
    }
};
