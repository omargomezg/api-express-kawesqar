const facturaDAO = require("../dao/factura.dao");
const Invoice = require('../model/invoice.model');
const InvoiceDetail = require('../model/invoiceDetail.model')
const sequelize = require('../config/config').sequelize();

module.exports = {
    getAll: async (req, resp, next) => {
        facturaDAO.getAll(req.params.estado, data => {
            const facturas = data.map(function (item) {
                const factura = {}
                const proveedor = {}
                factura.id = item.id;
                factura.numero = item.numero.trim();
                factura.estadoUso = item.estadoUso;
                proveedor.rut = item.proveedor_rut;
                proveedor.nombre = item.proveedor_nombre;
                factura.proveedor = proveedor;
                return factura;
            });
            resp.send(facturas);
        });
    },
    save: async (req, res) => {
        let invoice = {
            id: req.body.id,
            document_number: req.body.numero,
            supplier_id: req.body.proveedor.rut,
            emission_date: req.body.fecha,
            state: req.body.estado,
            tax: req.body.impuesto,
            document_type_id: req.body.tipo.id,
            comment: req.body.notas,
            subsidiary_id: req.body.sucursal.id,
            items: []
        };
        try {
            let find = await Invoice.findOne({where: {id: req.body.id}});
            if (find === null) {
                find = await Invoice.create(invoice);
            }
            if (req.body.items) {
                find.items = [];
                for (const item of req.body.items) {
                    const detail = {
                        id: item.id,
                        article_id: item.product.sku,
                        amount: item.amount,
                        quantity: item.quantity,
                        invoice_id: find.id,
                        expiration_date: item.vencimiento.date,
                        subsidiary_id: find.subsidiary_id,
                        warehouse_id: item.bodega.id
                    }
                    let detailFound = await InvoiceDetail.findByPk(detail.id);
                    if (detailFound === null) {
                        await InvoiceDetail.create(detail);
                    } else {
                        await InvoiceDetail.update(detail, {where: {id: detail.id}});
                    }
                    invoice.items = await InvoiceDetail.findAll({where: {invoice_id: find.id}});
                }
            }
            res.send(invoice);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    delete: () => {
    }
};

