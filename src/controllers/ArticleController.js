import Controller from "./Controller";
import ArticleService from "../services/ArticleService";
import Article from "../model/Article.model";

const articleService = new ArticleService(
    Article
)

class ArticleController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new ArticleController(articleService);