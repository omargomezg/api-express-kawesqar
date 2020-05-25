import Controller from "./Controller";
import DocumentService from "../services/DocumentService";
import Document from "../model/Document.model";

const documentService = new DocumentService(
    Document
)

class DocumentController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new DocumentController(documentService);