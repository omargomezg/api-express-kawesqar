import Controller from "./Controller";
import SubsidiaryService from "../services/SubsidiaryService";
import Subsidiary from "../model/Subsidiary.model";

const subsidiaryService = new SubsidiaryService(
    Subsidiary
)

class SubsidiaryController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new SubsidiaryController(subsidiaryService);