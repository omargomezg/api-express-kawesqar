import Controller from "./Controller";
import WharehouseService from "../services/WharehouseService";
import Wharehouse from "../model/Warehouse.model";

const warehouseService = new WharehouseService(
    Wharehouse
)

class WarehouseController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new WarehouseController(warehouseService);