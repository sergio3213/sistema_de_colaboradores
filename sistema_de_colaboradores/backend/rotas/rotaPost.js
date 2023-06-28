import express from "express";
const routerPost = express.Router();
import controllerCadastraUsuarios from "../controllers/controllerCadastraUsuario.js";
routerPost.post("/cadastrarUsuario", controllerCadastraUsuarios);

export default routerPost