module.exports = (sequelize,Sequelize) => {
    const Juegos = sequelize.define("juegos",{
        play_status:{
            type:Sequelize.STRING
        },
        details:{
            type:Sequelize.STRING
        }
    });
    return Juegos;
}