const Sequelize=require('sequelize');

const sequelize=new Sequelize('practice_db','root','root',{
    host:'localhost',
    dialect:'mysql'
    
})

sequelize.sync();

module.exports=sequelize;