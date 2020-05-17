import Controller from "./Controller";
import InvoiceTempService from "../services/InvoiceTempService";
import InvoiceTemporalDetail from "../model/InvoiceTemporalDetail.model";

const invoiceTempService = new InvoiceTempService(
    InvoiceTemporalDetail
)

class InvoiceTemporalDetailController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new InvoiceTemporalDetailController(invoiceTempService);