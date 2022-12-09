const express = require("express");
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3000;

const init = async ()=> {  
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

  
    app.use("/api", routes());
    app.use((req,res,next)=> res.status(404).send("Cette Route n'existe pas"))
    app.use((error,req,res,next)=> res.status(error.status || 500).json({status:error.status,msg:error.message}));
  };

  init().then(()=>
  app.listen(PORT,()=>{
    console.log(`API UP on localhost:${PORT}`);
  })  
  )