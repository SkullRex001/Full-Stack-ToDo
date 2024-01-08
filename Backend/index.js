const express = require('express');
const { ToDoRouter } = require('./routes');
const app = express();
app.listen(3001 , (err)=>{
    if(err) {
        console.log(err);
    }

    else{
        console.log("Port is running")
    }
  
})

app.use('/' , ToDoRouter)