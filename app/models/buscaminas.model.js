module.exports = (sequelize,Sequelize) => {
    const Juegos = sequelize.define("juegos",{
        jugador:{
            type:Sequelize.STRING
        },

        disparos:{
            type:Sequelize.STRING
        },

        play_status:{
            type:Sequelize.STRING
        },
        details:{
            type:Sequelize.STRING
        }
    });
    return Juegos;
}