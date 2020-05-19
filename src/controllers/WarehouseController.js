import Controller from "./Controller";
import WharehouseService from "../services/WharehouseService";
import Wharehouse from "../model/Warehouse.model";

const warehouseService = new WharehouseService(
    Wharehouse
)

class WarehouseController extends Controller {
    constructor(service) {
        super(service);
        this.getBySubsidiary = this.getBySubsidiary.bind(this);
    }

    async getBySubsidiary(req, res) { 
        const response = await warehouseService.getBySubsidiary(req.query);
        return res.status(response.statusCode).send(response.data);
    }
}

export default new WarehouseController(warehouseService);