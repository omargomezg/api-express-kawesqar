import Controller from "./Controller";
import CommuneService from "../services/CommuneService";
import Commune from "../model/Commune.model";

const communeService = new CommuneService(
    Commune
)

class CommuneController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new CommuneController(communeService);