import Service from './Service';
import Subsidiary_WarehouseModel from '../model/Subsidiary_wahehouse.model';
import { Op } from 'sequelize';

class WharehouseService extends Service {
    constructor(model) {
        super(model);
    }

    async getBySubsidiary(query) { 
        let { skip, limit, subsidiary_id } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        delete query.subsidiary_id
        try {
            let ids = [];
            const related = await Subsidiary_WarehouseModel.findAll({ where: { subsidiary_id: subsidiary_id } });
            related.forEach(item => {
                ids.push(item.subsidiary_id)
            });
            let items = await this.model.findAll({
                where: {
                    id: {
                        [Op.in]: ids
                    }
                }
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

export default WharehouseService;