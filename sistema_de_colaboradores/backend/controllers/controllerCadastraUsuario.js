import meuCrud from "../CRUD/meuCrud.js";

async function controllerCadastraUsuarios(req, res) {
  const crud = new meuCrud();
  const userCadastrado = await crud.cadastrarUsuario(req.body.usuario,req.body.senha,req.body.tipo);
  res.status(200).json(userCadastrado);
}
export default controllerCadastraUsuarios;
