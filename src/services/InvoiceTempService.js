import Service from './Service';
import ArticleModel from '../model/Article.model';
import WarehouseModel from '../model/Warehouse.model';

class InvoiceTempService extends Service {
    constructor(model) {
        super(model);
        this.getAll = this.getAll.bind(this);
    }

    async getAll(query) {
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            let items = await this.model.findAndCountAll({
                where: query,
                limit: limit,
                offset: skip,
                include: [
                    { model: ArticleModel, as: 'article' },
                    { model: WarehouseModel, as: 'warehouse' }
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
}

export default InvoiceTempService;