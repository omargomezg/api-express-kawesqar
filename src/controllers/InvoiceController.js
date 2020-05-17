import Controller from "./Controller";
import InvoiceService from "../services/InvoiceService";
import Invoice from "../model/Invoice.model";

const invoiceService = new InvoiceService(
    Invoice
)

class InvoiceController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new InvoiceController(invoiceService);