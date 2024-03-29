require('dotenv').config();
const express = require('express');
var cors = require('cors')

const connectDB = require('./db/connect_db');
const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const router = require('./routes');
const ai_router = require('./ai_routes');

const PORT = 5000;

app.get('/', (req, res) => {
    console.log("uguguuuu");
    res.send('Hello there, v0.0.1');
});
app.get('/health', (req, res) => {
    res.send('Server is running healthy.');
});

app.use("/ai", ai_router);

connectDB();
app.use("/api", router);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
