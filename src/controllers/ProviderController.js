import Controller from "./Controller";
import ProviderService from "../services/ProviderService";
import Provider from "../model/Provider.model";

const providerService = new ProviderService(
    Provider
)

class ProviderController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new ProviderController(providerService);