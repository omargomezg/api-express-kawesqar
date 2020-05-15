import Controller from "./Controller";
import UserService from "../services/UserService";
import User from "../model/User.model";
import Utils from "../Utils/Rut";

const userService = new UserService(
    User
)

class UserController extends Controller {
    constructor(service) {
        super(service);
        this.authentication = this.authentication.bind(this);
    }

    async authentication(req, res){
        const param = {
            rut: Utils.formatRut(req.body.user),
            password: req.body.password
        }
        let response = await this.service.authentication(param.rut, param.password);
        return res.status(response.statusCode).send({token: response.data});
    }

}

export default new UserController(userService);