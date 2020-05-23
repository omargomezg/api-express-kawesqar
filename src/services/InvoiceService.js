import Service from './Service';
import ProviderModel from "../model/Provider.model";
import UserModel from "../model/User.model";
import TypeOfDocumentModel from "../model/TypeOfDocument.model";

class InvoiceService extends Service {
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
            let items = await this.model.findAll({
                limit: limit,
                where: query,
                include: [{ model: ProviderModel, as: 'provider' }, { model: UserModel, as: 'user' }, { model: TypeOfDocumentModel, as: 'document' }]
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

export default InvoiceService;