import Service from './Service';
import InvoiceDetailModel from '../model/InvoiceDetail.model';
import InvoiceTemporalDetailModel from '../model/InvoiceTemporalDetail.model';
import ProviderModel from "../model/Provider.model";
import ItemBreakdownModel from "../model/itemBreakdown.model";
import UserModel from "../model/User.model";
import TypeOfDocumentModel from "../model/TypeOfDocument.model";
import { sequelize } from '../config/config';
const config = require('../config/config').sequelize();

class InvoiceService extends Service {
    constructor(model) {
        super(model);
        this.getAll = this.getAll.bind(this);
        this.download = this.download.bind(this);
        this.update = this.update.bind(this);
    }

    async getAll(query) {
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            let items = await this.model.findAndCountAll({
                limit: limit,
                where: query,
                distinct: true,
                offset: skip,
                order: [['emission_date', 'DESC']],
                include: [
                    { model: ProviderModel, as: 'provider' },
                    { model: UserModel, as: 'user' },
                    { model: TypeOfDocumentModel, as: 'document' },
                    { model: InvoiceDetailModel, as: 'detail' }]
            });
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }

    async download(query) {
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            let items = await this.model.findAll({
                limit: limit,
                where: query,
                include: [
                    { model: ProviderModel, as: 'provider' },
                    { model: UserModel, as: 'user' },
                    { model: TypeOfDocumentModel, as: 'document' },
                    { model: InvoiceDetailModel, as: 'detail' }
                ]
            });
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors
            }
        }
    }

    async update(id, data) {
        const t = await config.transaction();
        try {
            let item = await this.model.findByPk(id);
            if (!item) {
                throw new Error('Element not found');
            }
            if (item.state === 'EP' && data.state === 'CF') {
                const temporalDetail = await InvoiceTemporalDetailModel.findAll({ where: { invoice_id: id } });
                const bulkDetail = temporalDetail.map(item => {
                    return {
                        id: null,
                        invoice_id: id,
                        article_id: item.article_id,
                        amount: item.amount,
                        quantity: item.quantity
                    }
                });
                await InvoiceDetailModel.bulkCreate(bulkDetail, { transaction: t });
                let itemBreakdown = [];
                temporalDetail.forEach(item => {
                    const data = item.get();
                    for (let index = 0; index < item.quantity; index++) {
                        itemBreakdown.push({
                            article_id: data.article_id,
                            amount: data.amount,
                            invoice_id: id,
                            expiration_date: data.expiration_date,
                            subsidiary_id: data.subsidiary_id,
                            warehouse_id: data.warehouse_id
                        });
                    }
                });
                await ItemBreakdownModel.bulkCreate(itemBreakdown, { transaction: t });
            }
            await this.model.update(data, { where: { id: id } }, { transaction: t });
            item = await this.model.findByPk(id);
            await t.commit();
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            console.log(error);
            await t.rollback();
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
    }
}

export default InvoiceService;