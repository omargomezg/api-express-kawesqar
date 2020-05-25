import Controller from "./Controller";
import MeasureService from "../services/MeasureService";
import Measure from "../model/Measure.model";

const measureService = new MeasureService(
    Measure
)

class MeasureController extends Controller {
    constructor(service) {
        super(service);
    }

}

export default new MeasureController(measureService);