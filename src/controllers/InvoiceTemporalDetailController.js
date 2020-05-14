import Controller from "./Controller";
import InvoiceTempService from "../services/InvoiceTempService";
import InvoiceTemporalDetail from "../model/invoiceTemporalDetail.model";

const invoiceTempService = new InvoiceTempService(
    InvoiceTemporalDetail
)

class InvoiceTemporalDetailController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new InvoiceTemporalDetailController(invoiceTempService);