import Controller from "./Controller";
import RoleService from "../services/RoleService";
import Role from "../model/Role.model";

const roleService = new RoleService(
    Role
)

class RoleController extends Controller {
    constructor(service) {
        super(service);
    }
}

export default new RoleController(roleService);