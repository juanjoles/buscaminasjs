const {sequelize, operation} = require ("../models");
const db = require ("../models")
const Juegos = db.juego;
const Op = db.Sequelize.Op;

//Create new play
exports.create = (req,res) => {
    const juegos = {
        name : req.body.name,
        lastname:req.body.lastname,
    };

    Juegos.create(juegos)
    .then(data => {
        res.send('juego creado');
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "error"
        });
    });
}

//Select play
exports.select = (req,res) => {
    Juegos.findAll()
    .then(data => {
        res.send('select ok');
    })
    
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "error select"
        });
    });
}