const juego = require("../controllers/buscaminas.controllers");
var router = require ("express").Router();

router.post('/',juego.create);

router.get('/',juego.select);

module.exports = router;