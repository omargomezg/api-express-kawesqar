import Controller from "./Controller";
import { InvoiceDetailModel} from "../model/index";
import InvoiceDetailService from "../services/InvoiceDetailService";

const invoiceDetailService = new InvoiceDetailService(
    InvoiceDetailModel
)

class InvoiceDetailController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new InvoiceDetailController(invoiceDetailService);