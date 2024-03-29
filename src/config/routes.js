import ArticleController from "../controllers/ArticleController";
import CommuneController from "../controllers/CommuneController";
import DocumentController from "../controllers/DocumentController";
import FamilyController from "../controllers/FamilyController";
import InvoiceController from "../controllers/InvoiceController";
import InvoiceDetailController from "../controllers/InvoiceDetailController";
import InvoiceTemporalDetailController from "../controllers/InvoiceTemporalDetailController";
import MeasureController from "../controllers/MeassureController";
import MenuController from "../controllers/MenuController";
import ProviderController from "../controllers/ProviderController";
import RoleController from "../controllers/RoleController";
import SubsidiaryController from "../controllers/SubsidiaryController";
import TypeOfDischargeController from "../controllers/TypeOfDischageController";
import UserController from "../controllers/UserController";
import WarehouseController from "../controllers/WarehouseController";
import IsProtected from "./protected";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Kawesqar API",
            description: "Kawesqar API Information",
            contact: {
                name: "Omar Gomez Gomez"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: [
        "index.js"
    ]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default (server) => {

    server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    /**
     * @swagger
     * /api/authentication:
     *    put:
     *      description: Use to return all customers
     *    parameters:
     *      - name: customer
     *        in: query
     *        description: Name of our customer
     *        required: false
     *        schema:
     *          type: string
     *          format: string
     *    responses:
     *      '201':
     *        description: Successfully created user
     */
    server.get('/api/authentication', (req, res) => {
        return res.status(405).send('');
    });
    server.post('/api/authentication', UserController.authentication);
    server.put('/api/authentication/:id', (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/authentication/:id', (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Invoices
     */
    server.get('/api/invoice', IsProtected, InvoiceController.getAll);
    server.post('/api/invoice', IsProtected, InvoiceController.insert);
    server.put('/api/invoice/:id', IsProtected, InvoiceController.update);
    server.delete('/api/invoice/:id', IsProtected, InvoiceController.delete);

    /**
     * Invoices download
     */
    server.get('/api/invoice/download', InvoiceController.download);
    server.post('/api/invoice/download', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/invoice/download/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/invoice/download/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Article
     */
    server.get('/api/article', IsProtected, ArticleController.getAll);
    server.post('/api/article', IsProtected, ArticleController.insert);
    server.put('/api/article/:id', IsProtected, ArticleController.update);
    server.delete('/api/article/:id', IsProtected, ArticleController.delete);

    /**
     * Subsidiary
     */
    server.get('/api/subsidiary', IsProtected, SubsidiaryController.getAll);
    server.post('/api/subsidiary', IsProtected, SubsidiaryController.insert);
    server.put('/api/subsidiary/:id', IsProtected, SubsidiaryController.update);
    server.delete('/api/subsidiary/:id', IsProtected, SubsidiaryController.delete);

    /**
     * Temporal data detail for invoice
     */
    server.get('/api/invoice-detail', IsProtected, InvoiceDetailController.getAll);
    server.post('/api/invoice-detail', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/invoice-detail/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/invoice-detail/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

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
    server.post('/api/commune', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/commune/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/commune/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Warehouse
     */
    server.get('/api/warehouse', IsProtected, WarehouseController.getAll);
    server.post('/api/warehouse', IsProtected, WarehouseController.insert);
    server.put('/api/warehouse/:id', IsProtected, WarehouseController.update);
    server.delete('/api/warehouse/:id', IsProtected, WarehouseController.delete);

    /**
     * User
     */
    server.get('/api/user', IsProtected, UserController.getAll);
    server.post('/api/user', IsProtected, UserController.insert);
    server.put('/api/user/:id', IsProtected, UserController.update);
    server.delete('/api/user/:id', IsProtected, UserController.delete);

    /**
     * User password
     */
    server.get('/api/user/password', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.post('/api/user/password', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/password/:rut', IsProtected, UserController.updatePassword);
    server.delete('/api/user/password/:rut', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * User menu
     */
    server.get('/api/user/menu/list/:id', IsProtected, UserController.getMenu);
    server.post('/api/user/menu/list/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/menu/list/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/user/menu/list/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * User turn
     */
    server.get('/api/user/turn', IsProtected, UserController.getMenu);
    server.post('/api/user/turn', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/turn/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/user/turn/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Warehouse for user
     */
    server.get('/api/user/warehouse', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.post('/api/user/warehouse', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/warehouse/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/user/warehouse/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Subsidiary for user
     */
    server.get('/api/user/subsidiary', IsProtected, UserController.getAllSubsidiary);
    server.post('/api/user/subsidiary', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/subsidiary/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/user/subsidiary/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Warehouse for subsidiary
     */
    server.get('/api/menu', MenuController.getAll);
    server.post('/api/menu', (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/menu/:id', (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/menu/:id', (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Warehouse for subsidiary
     */
    server.get('/api/subsidiary/warehouse', IsProtected, SubsidiaryController.getRelationWithWarehouse);
    server.post('/api/subsidiary/warehouse', IsProtected, SubsidiaryController.insertRelationWithWarehouse);
    server.put('/api/subsidiary/warehouse/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/subsidiary/warehouse/:id', IsProtected, SubsidiaryController.deleteRelationWithWarehouse);

    /**
     * Family for subsidiary
     */
    server.get('/api/subsidiary/family', IsProtected, SubsidiaryController.getRelationWithFamily);
    server.post('/api/subsidiary/family', IsProtected, SubsidiaryController.insertRelationWithFamily);
    server.put('/api/subsidiary/family/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/subsidiary/family/:id', IsProtected, SubsidiaryController.deleteRelationWithWarehouse);

    /**
     * Family for family
     */
    server.get('/api/user/family', (req, res) => {
        return res.status(405).send('');
    });
    server.post('/api/user/family', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/user/family/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/user/family/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Families
     */
    server.get('/api/family', IsProtected, IsProtected, FamilyController.getAll);
    server.post('/api/family', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/family/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/family/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Documents
     */
    server.get('/api/document', IsProtected, DocumentController.getAll);
    server.post('/api/document', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/document/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/document/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Provider
     */
    server.get('/api/provider', IsProtected, ProviderController.getAll);
    server.post('/api/provider', IsProtected, ProviderController.insert);
    server.put('/api/provider/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/provider/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Role
     */
    server.get('/api/role', IsProtected, RoleController.getAll);
    server.post('/api/role', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/role/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/role/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Measure
     */
    server.get('/api/measure', IsProtected, MeasureController.getAll);
    server.post('/api/measure', IsProtected, MeasureController.insert);
    server.put('/api/measure/:id', IsProtected, MeasureController.update);
    server.delete('/api/measure/:id', IsProtected, MeasureController.delete);

    /**
     * Type of discharge
     */
    server.get('/api/type-of-discharge', IsProtected, TypeOfDischargeController.getAll);
    server.post('/api/type-of-discharge', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.put('/api/type-of-discharge/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/type-of-discharge/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Relation user with subsidiary
     */
    server.get('/api/relation-user-subsidiary', IsProtected, UserController.getAllRelationUserInSubsidiary);
    server.post('/api/relation-user-subsidiary', IsProtected, UserController.insertRelationUserInSubsidiary);
    server.put('/api/relation-user-subsidiary/:id', IsProtected, UserController.updateRelationUserInSubsidiary);
    server.delete('/api/relation-user-subsidiary/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

    /**
     * Type of discharge
     */
    server.get('/api/relation-user-type-of-sale', IsProtected, UserController.getAllRelationUserInTypeOfSale);
    server.post('/api/relation-user-type-of-sale', IsProtected, UserController.insertRelationUserInTypeOfSale);
    server.put('/api/relation-user-type-of-sale/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });
    server.delete('/api/relation-user-type-of-sale/:id', IsProtected, (req, res) => {
        return res.status(405).send('');
    });

}