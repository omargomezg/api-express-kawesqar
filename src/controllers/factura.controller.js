const facturaDAO = require("../dao/factura.dao");
const Invoice = require('../model/invoice.model');
const Provider = require('../model/provider.model');
const TypeOfDocument = require('../model/typeOfDocument.model');
const InvoiceDetail = require('../model/invoiceDetail.model');
const JwtUtils = require('../services/jwt');
const {Op} = require('sequelize');

module.exports = {
    getAllByState: async (req, res) => {
        try {
            const result = await Invoice.findAll({
                where: {
                    state: req.params.state
                },
                include: [
                    {
                        model: Provider, as: 'provider'
                    },
                    {
                        model: TypeOfDocument, as: 'typeOfDocument'
                    }
                ],
                raw: false
            });
            res.json(result);
        } catch (e) {
        console.log(e);
        res.status(500).json({
            status: 'fail',
            message: 'Cannot delete invoice'
        });
    }
    },
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
            document_number: req.body.document_number,
            supplier_id: req.body.proveedor.rut,
            emission_date: req.body.emission_date,
            state: req.body.state,
            tax: req.body.tax,
            document_type_id: req.body.tipo.id,
            comment: req.body.notas,
            subsidiary_id: req.body.sucursal.id,
            user_id: JwtUtils.getUserRut(req.headers['access-token']),
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
            console.log(e);
            res.status(500).send(e);
        }
    },
    delete: async (req, res) => {
        const invoice = await Invoice.findOne({where: {id: req.params.id}, raw: true});
        if (invoice.state !== 'EP') {
            res.status(500).send(`Invoice status is ${invoice.state}`);
        }
        console.log(`the id is ${invoice.id}`);
        try {
            await InvoiceDetail.destroy({where: {invoice_id: invoice.id}});
            await Invoice.destroy({where: {id: invoice.id}});
            res.send('Success');
        } catch (e) {
            console.log(e);
            res.status(500).json({
                status: 'fail',
                message: 'Cannot delete invoice'
            });
        }
    }
};

