const {sequelize} = require ("../models");
const db = require ("../models")
const Juegos = db.juego;
const Op = db.Sequelize.Op;

//Crear Nuevo Juego
exports.create = (req,res) => {


    
let num = 0;
let bombas = 6;

var buscaminas = new Array(5);  //Le damos dimension de 5x5 al tablero.
for (let i = 0; i<5; i++){
    buscaminas[i] = new Array(5);
}

for (let i = 0; i<5; i++){
    for (let j = 0; j<5 ;j++){
      buscaminas[i][j] = num++;		//Inicializamos el tablero.
    }
  }

while( bombas != 0){
   let row =  Math.floor(Math.random()*5);
    let column =  Math.floor(Math.random()*5);
     buscaminas[row][column] = 'x';  //Colocamos las bombas en el tablero.
    bombas--;
}

console.log(buscaminas)
details = buscaminas;
let nuevo = []
 var indices = [];

 for (let i = 0; i<5; i++){
    for (let j = 0; j<5 ;j++){
      if (buscaminas[i][j] !== 'x'){
          nuevo.push(buscaminas[i][j])  //Nuevo arreglo sin las bombas
      }
    }
  }
console.log(nuevo)
  
let juego = req.body.disparos;
var k = 0;

if (juego.length == 3){
    for(let i=0; i<19;i++){
        for(let j=0; j<3; j++){
            if (nuevo[i] === juego[j]){   //Verificamos si hay match
                k=k+1;
                
            }
        }
    } 
      
    if(k == 3){
        play_status = 'Juego Ganado'
    }else{
        play_status = 'Juego Perdido'
    }
        
    
        const juegos = {
            jugador:req.body.jugador,
            disparos:req.body.disparos.join(','),
            play_status: play_status,
            details: details.join(',')
            
        };
    
        Juegos.create(juegos)
        .then(data => {
            res.send(juegos);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "error"
            });
        });
}else{
    res.send('Ingrese un arreglo de tipo [1,2,3]');
}

}

//Seleccionar Partida por ID
exports.select = (req,res) => {
    const id = req.params.id;
    let condicion = {id:`${id}`}
    Juegos.findOne({where:condicion})
    .then(data =>{
        
        if(data == null){
             res.send('No existe partida, debe generar una nueva.');
        }else{
            res.send(data);
        }
        
    })
    
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "error select"
        });
    });
}


//Selecciona todas las partidas.
exports.findAll = (req,res) => {
    Juegos.findAll({
        order: [['createdAt', 'DESC']]   
    })
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Error select"
            });
        });
}