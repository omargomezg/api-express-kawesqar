class Service {
    constructor(model) {
        this.model = model;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(query) {
        try {
            let items = await this.model.findAll();
            return {
                error: false,
                statusCode: 200,
                data: items
            }
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
            }
        }
    }

    async insert(data) {
        try {
            console.log(data);
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    statusCode: 200,
                    data: item
                }
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                message: error.errmsq || 'Not able to create item',
                error
            }
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByPk(id);
            if (!item)
                throw new Error('Element not found');
            await this.model.update(data, { where: { id: id } })
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
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
                error
            };
        }
    }
}

export default Service;