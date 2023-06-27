import express from "express";
const routerGet = express.Router();
    
routerGet.get("/cadastroUsuario", (req,res)=>{
    res.status(200).json({
        'message':'rota em funcionamento'
    })
});

export default routerGet