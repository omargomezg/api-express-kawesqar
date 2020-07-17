import Controller from "./Controller";
import MenuService from "../services/MenuService";
import Menu from "../model/Menu.model";

const menuService = new MenuService(
    Menu
)

class MenuController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new MenuController(menuService);