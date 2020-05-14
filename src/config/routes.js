import InvoiceController from "../controllers/InvoiceController";
import InvoiceTemporalDetailController from "../controllers/InvoiceTemporalDetailController";
import CommuneController from "../controllers/CommuneController";
import Wharehouse from "../controllers/WarehouseController";

export default (server) => {

    /**
     * Invoices
     */
    server.get('/api/invoice', InvoiceController.getAll);
    server.post('/api/invoice', InvoiceController.insert);
    server.put('/api/invoice/:id', InvoiceController.update);
    server.delete('/api/invoice/:id', InvoiceController.delete);

    /**
     * Temporal data detail for invoice
     */
    server.get('/api/invoice-temporal-detail', InvoiceTemporalDetailController.getAll);
    server.post('/api/invoice-temporal-detail', InvoiceTemporalDetailController.insert);
    server.put('/api/invoice-temporal-detail/:id', InvoiceTemporalDetailController.update);
    server.delete('/api/invoice-temporal-detail/:id', InvoiceTemporalDetailController.delete);

    /**
     * Chilean commune
     */
    server.get('/api/commune', CommuneController.getAll);
    server.post('/api/commune', CommuneController.insert);
    server.put('/api/commune/:id', CommuneController.update);
    server.delete('/api/commune/:id', CommuneController.delete);

    /**
     * Chilean commune
     */
    server.get('/api/wharehouse', Wharehouse.getAll);
    server.post('/api/wharehouse', Wharehouse.insert);
    server.put('/api/wharehouse/:id', Wharehouse.update);
    server.delete('/api/wharehouse/:id', Wharehouse.delete);

}