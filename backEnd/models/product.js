const { Sequelize } = require('sequelize');
const sequelize=require('../utils/database');
// const Sequelize=require('sequelize');

const Product=sequelize.define('Product',{
    id:{
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    itemname:{
        type:Sequelize.Sequelize.STRING
    },
    description:{
        type:Sequelize.Sequelize.STRING
    },
    price:{
        type:Sequelize.Sequelize.INTEGER
    },
    quantity:{
        type:Sequelize.Sequelize.INTEGER
    }
})

module.exports=Product;