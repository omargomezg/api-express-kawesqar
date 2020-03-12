const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.get('/', (req, res) => {
    res.send({ message: 'Hola' })
})

if (require.main === module) {
    app.listen(PORT, () => {
        console.log('Servidor en localhost:', PORT);
    })
}

