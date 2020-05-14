import Controller from "./Controller";
import InvoiceService from "../services/invoiceService";
import Invoice from "../model/invoice.model";

const invoiceService = new InvoiceService(
    Invoice
)

class InvoiceController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new InvoiceController(invoiceService);