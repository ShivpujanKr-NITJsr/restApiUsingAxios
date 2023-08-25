const express =require('express');
const routers=require('./routers/routes')
const cors=require('cors');
const app=express();


app.use(cors())

app.use(express.json())


app.use('/',routers)

app.listen(4000,()=>{
    console.log('hey i am started , i am server')
})