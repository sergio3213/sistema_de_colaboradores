import express from "express";
const routerGet = express.Router();
import controllerCadastraUsuarios from "../controllers/controllerCadastraUsuario.js";
routerGet.get("/cadastrarUsuario", controllerCadastraUsuarios);

export default routerGet