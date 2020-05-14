import express from 'express';
import bodyParser from 'body-parser';
import setRouters from './routes';
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept");
 next();
});

setRouters(server);

export default server;