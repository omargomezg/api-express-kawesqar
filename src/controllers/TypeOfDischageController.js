import Controller from "./Controller";
import TypeOfDischageService from "../services/TypeOfDischageService";
import TypeOfDischarge from "../model/TypeOfDischargeService.model";

const typeOfDischageService = new TypeOfDischageService(
    TypeOfDischarge
)

class TypeOfDischageController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new TypeOfDischageController(typeOfDischageService);