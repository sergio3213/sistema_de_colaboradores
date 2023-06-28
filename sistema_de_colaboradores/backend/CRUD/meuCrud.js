import mysql from "mysql2";

class meuCrud {
  conexao = mysql.createConnection({
    host: "localhost", // Host do banco de dados
    user: "root", // Usuário do banco de dados
    password: "$ENHAfraca12", // Senha do banco de dados
    database: "sistema_de_colaboradores", // Nome do banco de dados
  });

  async cadastrarUsuario(usuario, senha, tipo) {
    this.conexao.query(`INSERT INTO usuarios(usuario,senha,tipo)VALUES('${usuario}','${senha}','${tipo}')`)
  }
}


export default meuCrud;