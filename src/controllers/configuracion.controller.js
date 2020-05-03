const configDAO = require("../dao/configuracion.dao")

async function getConfiguracion(req, res) {
    const result = await configDAO.getAll();
    const resultMap = await result.map(item => {
        return {
            impuesto: item.IVA
        }
    });
    res.send(resultMap);
}

module.exports = {
    getConfiguracion
}
