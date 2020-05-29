import Controller from "./Controller";
import SubsidiaryService from "../services/SubsidiaryService";
import Subsidiary from "../model/Subsidiary.model";

const subsidiaryService = new SubsidiaryService(
    Subsidiary
)

class SubsidiaryController extends Controller {
    constructor(service) {
        super(service);
        this.getRelationWithWarehouse = this.getRelationWithWarehouse.bind(this);
        this.insertRelationWithWarehouse = this.insertRelationWithWarehouse.bind(this);
        this.deleteRelationWithWarehouse = this.deleteRelationWithWarehouse.bind(this);
        this.getRelationWithFamily = this.getRelationWithFamily.bind(this);
        this.insertRelationWithFamily = this.insertRelationWithFamily.bind(this);
    }

    async getRelationWithWarehouse(req, res) {
        const response = await this.service.getRelationWithWarehouse(req.query);
        return res.status(response.statusCode).send(response.data);
    }

    async insertRelationWithWarehouse(req, res) {
        let response = await this.service.insertRelationWithWarehouse(req.body);
        if (response.error) return res.status(response.statusCode).send(response.errors);
        return res.status(201).send(response.data);
    }

    async insertRelationWithFamily(req, res) {
        let response = await this.service.insertRelationWithFamily(req.body);
        if (response.error) return res.status(response.statusCode).send(response.errors);
        return res.status(201).send(response.data);
    }

    async deleteRelationWithWarehouse(req, res) {
        const { id } = req.params;
        let response = await this.service.deleteRelationWithWarehouse(id);
        return res.status(response.statusCode).send(response.item);
    }

    async getRelationWithFamily(req, res) {
        const response = await this.service.getRelationWithFamily(req.query);
        return res.status(response.statusCode).send(response.data);
    }
}

export default new SubsidiaryController(subsidiaryService);