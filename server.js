const express = require('express');

const app = express();

app.use(express.json());

require('dotenv').config();
const db = require ("./app/models");
db.sequelize.sync();

app.use('/', require("./app/routes/buscaminas.routes"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port`);
});