import Controller from "./Controller";
import UserService from "../services/UserService";
import User from "../model/User.model";
import Utils from "../Utils/Rut";
import JwtUtils from "../services/jwt";

const userService = new UserService(
    User
)

class UserController extends Controller {
    constructor(service) {
        super(service);
        this.authentication = this.authentication.bind(this);
        this.insert = this.insert.bind(this);
        this.getAllSubsidiary = this.getAllSubsidiary.bind(this);
        this.getAllRelationUserInSubsidiary = this.getAllRelationUserInSubsidiary.bind(this);
        this.insertRelationUserInSubsidiary = this.insertRelationUserInSubsidiary.bind(this);
        this.getAllRelationUserInTypeOfSale = this.getAllRelationUserInTypeOfSale.bind(this);
        this.insertRelationUserInTypeOfSale = this.insertRelationUserInTypeOfSale.bind(this);
        this.getMenu = this.getMenu.bind(this);
    }

    async authentication(req, res) {
        const param = {
            rut: Utils.formatRut(req.body.user),
            password: req.body.password
        }
        let response = await this.service.authentication(param.rut, param.password);
        return res.status(response.statusCode).send({token: response.data});
    }

    async getAllSubsidiary(req, res) {
        const rut = JwtUtils.getUserRut(req.headers['access-token']);
        let response = await this.service.getAllSubsidiary(rut);
        return res.status(response.statusCode).send(response.data);
    }

    async getAllRelationUserInSubsidiary(req, res) {
        let response = await this.service.getAllRelationUserInSubsidiary(req.query);
        return res.status(response.statusCode).send(response.data);
    }

    async insertRelationUserInSubsidiary(req, res) {
        let response = await this.service.insertRelationUserInSubsidiary(req.body);
        return res.status(response.statusCode).send(response.data);
    }

    async getAllRelationUserInTypeOfSale(req, res) {
        let response = await this.service.getAllRelationUserInTypeOfSale(req.query);
        return res.status(response.statusCode).send(response.data);
    }

    async insertRelationUserInTypeOfSale(req, res) {
        let response = await this.service.insertRelationUserInTypeOfSale(req.body);
        return res.status(response.statusCode).send(response.data);
    }

    async getMenu(req, res) {
        const rut = JwtUtils.getUserRut(req.headers['access-token']);
        const id = req.params.id;
        let response = await this.service.getMenu(rut, id);
        return res.status(response.statusCode).send(response.data);
    }

}

export default new UserController(userService);