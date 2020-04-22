const tipoDocumentoDAO = require("../dao/tipoDocumento.dao");

module.exports = {

    getAll: (req, resp) => {
        tipoDocumentoDAO.getAll(result =>{
            resp.send(result);
        })
    }
};
