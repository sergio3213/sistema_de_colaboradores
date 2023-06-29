import "./cadastroUsuario.css";
import axios from 'axios';

import React, { useState } from "react";

function CadastroDeUsuario() {
    const [inputUsuario, setInputUsuario] = useState("");

    const [inputSenha, setInputSenha] = useState("");

    const [inputTipo, setInputTipo] = useState(0);

  async function handleInputUsuario(e) {
    setInputUsuario(e.target.value);
  }

  async function handleInputSenha(e) {
    setInputSenha(e.target.value);
  }
  async function handleInputTipo(e) {
    setInputTipo(e.target.value);
  }

  function requisicaoAxiosCadastroDeUsuarios() {
    axios.post('http://localhost:3001/cadastrarUsuario',
    {
        usuario:inputUsuario,
        senha:inputSenha,
        tipo:inputTipo
    })
    .then((data)=>{
      alert("Usuário cadastrado com sucesso!")
    })
    .catch((err)=>{
        alert(err.response.data.message)
    })
  }

  return (
    <div>
      <div className='divTitulo'>
        <h1 className='h1TituloCadastroDeUsuario'>Cadastro de usuário</h1>
      </div>

      <div className='divInputCadastroUsuarios'>
        <input
          className='inputUsuarioCadastroUsuario'
          onChange={(e) => handleInputUsuario(e)}
          type='text'
          placeholder='Usuário'
        />

        <br />

        <input
          className='inputSenhaCadastroUsuario'
          onChange={(e) => handleInputSenha(e)}
          type='password'
          placeholder='Senha'
        />

        <br />
        <select onChange={handleInputTipo} className='SelectTipoCadastroUsuario'>
          <option value='0'>comum</option>
          <option value='1'>master</option>
        </select>
        <br></br>
        <button className='ButtonCadastroUsuario' onClick={requisicaoAxiosCadastroDeUsuarios}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroDeUsuario;
