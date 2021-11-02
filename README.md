# Buscaminas Rustico

El juego consiste en un tablero de 5x5, el cual contiene números que van del 0 al 24. Dentro de la secuencia de estos números se encuentran escondidas ciertas bombas. Estas se generan de forma aleatoria en cada juego, y están representadas por la letra X.

Tablero sin Bombas
[ 0, 1, 2, 3, 4 ],
[ 5, 6, 7, 8, 9 ],
[ 10, 11, 12, 13, 14 ],
[ 15, 16, 17, 18, 19 ],
[ 20, 21, 22, 23, 24 ]

Tablero con Bombas activas
[ 0, 1, 'x', 3, 4 ],
[ 5, 6, 'x', 8, 9 ],
[ 'x', 11, 12, 'x', 14 ],
[ 15, 16, 17, 18, 19 ],
[ 20, 21, 'x', 23, 'x' ]

Para comenzar el juego se debe ingresar un nombre que representa al jugador. Cada jugador tiene 3 tiros. Cada tiro representa una posición, y debe intentar no caer en una bomba.
Para iniciar una partida se debe ingresar el nombre del jugador y sus tiros. Ejemplo:
{
    "jugador": "juan",
    "disparos":[5,2,6]
}

El juego se gana si el jugador acierta sus tiros con posiciones libres de bombas.

El mismo esta realizado con Nodejs + Express + Sequelize + PostgreSql 

Npm install : instalar dependencias.

El mismo se puede probrar con Postman con los siguientes métodos:

POST: crea nueva partida
{
    "jugador": "juan",
    "disparos":[5,2,6]
}

GET: /id 
Selecciona una partida determinada, si no se encuentra le pedida generar una nueva.

GET: método adicional para listar todas las partidas existentes.

*NOTA: deje los console.log de los tableros generados para que se vea mejor.
