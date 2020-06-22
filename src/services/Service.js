
/**
 * Copyright Hardnets, Chile
 * All rights reserved.
 * omar.fdo.gomez@gmail.com
 * https://dev.to/pacheco/designing-a-better-architecture-for-a-node-js-api-24d
 */
class Service {
    constructor(model) {
        this.model = model;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(query) {
        let { skip, limit } = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 500;

        delete query.skip;
        delete query.limit;
        try {
            let items = await this.model.findAndCountAll({
                where: query,
                limit: limit,
                offset: skip,
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

    async insert(data) {
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    statusCode: 200,
                    data: item
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

    async update(id, data) {
        try {
            let item = await this.model.findByPk(id);
            if (!item) {
                throw new Error('Element not found');
            }
            await this.model.update(data, { where: { id: id } });
            item = await this.model.findByPk(id);
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

    async delete(id) {
        try {
            let item = await this.model.findByPk(id);
            if (!item)
                throw new Error('Element not found');
            await this.model.destroy({ where: { id: id } });
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
}

export default Service;