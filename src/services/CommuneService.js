import Service from './Service';

class CommuneService extends Service {
    constructor(model) {
        super(model);
    }

    insert() {
        return {
            error: true,
            statusCode: 405,
            ermessage: 'Operation not allowed'
        };
    }

    update() {
        return {
            error: true,
            statusCode: 405,
            ermessage: 'Operation not allowed'
        };
    }

    delete() {
        return {
            error: true,
            statusCode: 405,
            ermessage: 'Operation not allowed'
        };
    }
}

export default CommuneService;