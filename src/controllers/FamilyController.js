import Controller from "./Controller";
import FamilyService from "../services/FamilyService";
import Family from "../model/Family.model";

const familyService = new FamilyService(
    Family
)

class FamilyController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new FamilyController(familyService);