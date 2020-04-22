const config = require("../config/config");
const sql = require("mssql");

module.exports = {

    getAll: (req, resp) => {
        sql.connect(config.config()).then(pool => {
            return pool.request()
                .query(`
                select provrut,
                       provnombre,
                       provfono,
                       provfax,
                       provcelular,
                       provdireccion,
                       provmail,
                       provweb,
                       provestado,
                       proveedor.codigo,
                       provabreviacion,
                       comunas.codigo commune_id,
                       comunas.nombre commune_name
                from proveedor inner join comunas on proveedor.codigo = comunas.codigo`)
        }).then(result => {
            const proveedores = result.recordset.map(item => {
                return {
                    rut: item.provrut,
                    name: item.provnombre,
                    phone: item.provfono,
                    fax: item.provfax,
                    cell: item.provcelular,
                    address: item.provdireccion,
                    email: item.provmail,
                    website: item.provweb,
                    isActive: item.provestado,
                    commune: {
                        id: item.commune_id,
                        name: item.commune_name
                    },
                    alias: item.provabreviacion
                };
            });
            resp.send(proveedores);
        }).catch(err => {
            resp.status(500).send("Escribre error" + err);
        });
    }
};
