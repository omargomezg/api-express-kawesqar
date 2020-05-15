import CommuneController from "../controllers/CommuneController";
import DocumentController from "../controllers/DocumentController";
import InvoiceController from "../controllers/InvoiceController";
import InvoiceTemporalDetailController from "../controllers/InvoiceTemporalDetailController";
import ProviderController from "../controllers/ProviderController";
import RoleController from "../controllers/RoleController";
import TypeOfDischargeController from "../controllers/TypeOfDischageController";
import UserController from "../controllers/UserController";
import WharehouseController from "../controllers/WarehouseController";
import IsProtected from "./protected";

export default (server) => {

    /**
     * Authentication
     */
    server.get('/api/authentication', (req, res) => { return res.status(405).send('') });
    server.post('/api/authentication', UserController.authentication);
    server.put('/api/authentication/:id', (req, res) => { return res.status(405).send('') });
    server.delete('/api/authentication/:id', (req, res) => { return res.status(405).send('') });

    /**
     * Invoices
     */
    server.get('/api/invoice', IsProtected, InvoiceController.getAll);
    server.post('/api/invoice', IsProtected, InvoiceController.insert);
    server.put('/api/invoice/:id', IsProtected, InvoiceController.update);
    server.delete('/api/invoice/:id', IsProtected, InvoiceController.delete);

    /**
     * Temporal data detail for invoice
     */
    server.get('/api/invoice-temporal-detail', IsProtected, InvoiceTemporalDetailController.getAll);
    server.post('/api/invoice-temporal-detail', IsProtected, InvoiceTemporalDetailController.insert);
    server.put('/api/invoice-temporal-detail/:id', IsProtected, InvoiceTemporalDetailController.update);
    server.delete('/api/invoice-temporal-detail/:id', IsProtected, InvoiceTemporalDetailController.delete);

    /**
     * Chilean commune
     */
    server.get('/api/commune', IsProtected, CommuneController.getAll);
    server.post('/api/commune', IsProtected, CommuneController.insert);
    server.put('/api/commune/:id', IsProtected, CommuneController.update);
    server.delete('/api/commune/:id', IsProtected, CommuneController.delete);

    /**
     * Warehouse
     */
    server.get('/api/warehouse', IsProtected, WharehouseController.getAll);
    server.post('/api/warehouse', IsProtected, WharehouseController.insert);
    server.put('/api/warehouse/:id', IsProtected, WharehouseController.update);
    server.delete('/api/warehouse/:id', IsProtected, WharehouseController.delete);

    /**
     * User
     */
    server.get('/api/user', IsProtected, UserController.getAll);
    server.post('/api/user', IsProtected, UserController.insert);
    server.put('/api/user/:id', IsProtected, UserController.update);
    server.delete('/api/user/:id', IsProtected, UserController.delete);

    /**
     * User menu
     */
    server.get('/api/user/menu/list/:id', IsProtected, UserController.getMenu);
    server.post('/api/user/menu/list/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/user/menu/list/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/user/menu/list/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Warehouse for user
     */
    server.get('/api/user/warehouse', IsProtected, (req, res) => { return res.status(405).send('') });
    server.post('/api/user/warehouse', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/user/warehouse/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/user/warehouse/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Subsidiary for user
     */
    server.get('/api/user/subsidiary', IsProtected, UserController.getAllSubsidiary);
    server.post('/api/user/subsidiary', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/user/subsidiary/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/user/subsidiary/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Warehouse for subsidiary
     */
    server.get('/api/user/subsidiary/:subsidiaryId/warehouse', IsProtected, (req, res) => { return res.status(405).send('') });
    server.post('/api/user/subsidiary/:subsidiaryId/warehouse', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/user/subsidiary/:subsidiaryId/warehouse/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/user/subsidiary/:subsidiaryId/warehouse/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Family
     */
    server.get('/api/user/family', IsProtected, (req, res) => { return res.status(405).send('') });
    server.post('/api/user/family', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/user/family/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/user/family/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Documents
     */
    server.get('/api/document', IsProtected, DocumentController.getAll);
    server.post('/api/document', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/document/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/document/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Provider
     */
    server.get('/api/provider', IsProtected, ProviderController.getAll);
    server.post('/api/provider', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/provider/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/provider/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Role
     */
    server.get('/api/role', IsProtected, RoleController.getAll);
    server.post('/api/role', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/role/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/role/:id', IsProtected, (req, res) => { return res.status(405).send('') });

    /**
     * Type of discharge
     */
    server.get('/api/type-of-discharge', IsProtected, TypeOfDischargeController.getAll);
    server.post('/api/type-of-discharge', IsProtected, (req, res) => { return res.status(405).send('') });
    server.put('/api/type-of-discharge/:id', IsProtected, (req, res) => { return res.status(405).send('') });
    server.delete('/api/type-of-discharge/:id', IsProtected, (req, res) => { return res.status(405).send('') });

}