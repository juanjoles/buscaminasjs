const juego = require("../controllers/buscaminas.controllers");
var router = require ("express").Router();

router.post('/',juego.create);

router.get('/:id',juego.select);

router.get('/', juego.findAll);

module.exports = router;