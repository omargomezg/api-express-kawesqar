import Service from './Service';
import Subsidiary_WarehouseModel from '../model/Subsidiary_wahehouse.model';
import Subsidiary_FamilyModel from '../model/Subsidiary_family.model';
import WarehouseModel from '../model/Warehouse.model';
import Subsidiary from '../model/Subsidiary.model';
import Family from '../model/Family.model';
import CommuneModel from "../model/Commune.model";

class SubsidiaryService extends Service {
    constructor(model) {
        super(model);
        this.getAll = this.getAll.bind(this);
        this.getRelationWithWarehouse = this.getRelationWithWarehouse.bind(this);
        this.insertRelationWithWarehouse = this.insertRelationWithWarehouse.bind(this);
        this.insertRelationWithFamily = this.insertRelationWithFamily.bind(this);
        this.deleteRelationWithWarehouse = this.deleteRelationWithWarehouse.bind(this);
        this.getRelationWithFamily = this.getRelationWithFamily.bind(this);
    }

    async getAll(query) {
        try {
            let {skip, limit} = query;

            skip = skip ? Number(skip) : 0;
            limit = limit ? Number(limit) : 500;

            delete query.skip;
            delete query.limit;
            let items = await this.model.findAndCountAll({
                limit: limit,
                where: query,
                offset: skip,
                include: [
                    {model: CommuneModel, as: 'commune'}
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

    async getRelationWithWarehouse(query) {
        let {skip, limit} = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            const related = await Subsidiary_WarehouseModel.findAll({
                attributes: ['id', 'state'],
                where: query,
                limit: limit,
                offset: skip,
                include: [{model: WarehouseModel, as: 'warehouse'}, {model: Subsidiary, as: 'subsidiary'}]
            });
            return {
                error: false,
                statusCode: 200,
                data: related
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                data: errors
            }
        }
    }

    async insertRelationWithWarehouse(data) {
        try {
            await Subsidiary_WarehouseModel.destroy({
                where: {
                    subsidiary_id: data.subsidiary_id
                }
            });
            const bulk = await Subsidiary_WarehouseModel.bulkCreate(data.items);
            if (bulk) {
                const related = await Subsidiary_WarehouseModel.findAll({
                    attributes: ['id', 'state'],
                    where: { subsidiary_id: data.subsidiary_id },
                    include: [{ model: WarehouseModel, as: 'warehouse' }, { model: Subsidiary, as: 'subsidiary' }]
                });
                return {
                    error: false,
                    statusCode: 200,
                    data: related
                }
            }
        } catch (err) {
            let isUnique = false;
            if (err.errors) {
                isUnique = err.errors.some(item => {
                    return item.type === 'unique violation';
                });
            }
            return {
                error: true,
                statusCode: isUnique ? 409 : 500,
                message: err.errmsg || 'Not able to create item',
                errors: err
            }
        }
    }

    async insertRelationWithFamily(data) {
        try {
            await Subsidiary_FamilyModel.destroy({
                where: {
                    subsidiary_id: data.subsidiary_id
                }
            });
            const bulk = await Subsidiary_FamilyModel.bulkCreate(data.items);
            if (bulk) {
                const related = await Subsidiary_FamilyModel.findAll({
                    attributes: ['id', 'state'],
                    where: { subsidiary_id: data.subsidiary_id}, include: [{ model: Family, as: 'family' }, { model: Subsidiary, as: 'subsidiary' }]
                });   
                return {
                    error: false,
                    statusCode: 200,
                    data: related
                }
            }
        } catch (err) {
            let isUnique = false;
            if (err.errors) {
                isUnique = err.errors.some(item => {
                    return item.type === 'unique violation';
                });
            }
            return {
                error: true,
                statusCode: isUnique ? 409 : 500,
                message: err.errmsg || 'Not able to create item',
                errors: err
            }
        }
    }

    async deleteRelationWithWarehouse(id) {
        try {
            let item = await this.Subsidiary_WarehouseModel.findByPk(id);
            if (!item)
                throw new Error('Element not found');
            await this.Subsidiary_WarehouseModel.destroy({where: {id: id}});
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                errors: error.errors
            };
        }
    }

    async getRelationWithFamily(query) {
        let {skip, limit} = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 10;

        delete query.skip;
        delete query.limit;
        try {
            const related = await Subsidiary_FamilyModel.findAll({
                attributes: ['id', 'state'],
                where: query, include: [{model: Family, as: 'family'}, {model: Subsidiary, as: 'subsidiary'}]
            });
            return {
                error: false,
                statusCode: 200,
                data: related
            }
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                data: errors
            }
        }
    }
}

export default SubsidiaryService;