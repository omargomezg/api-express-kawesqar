import Service from './Service';
import ProviderModel from "../model/Provider.model";
import MeasureModel from '../model/Measure.model';
import UserModel from "../model/User.model";
import TypeOfDocumentModel from "../model/TypeOfDocument.model";
import InvoiceDetailModel from "../model/InvoiceDetail.model";

class ArticleService extends Service {
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
                    { model: MeasureModel, as: 'measure' }
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

export default ArticleService;