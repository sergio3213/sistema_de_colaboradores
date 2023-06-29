import React, {useState} from "react";
import './telaLogin.css'
import axios from "axios";
import withRouter from "../../withRouter";
import { useNavigate } from "react-router-dom";

function TelaLogin(){
    
    const [inputUsuario, setInputUsuario] = useState('');
    
    const [inputSenha, setInputSenha] = useState('');
    const navigate = useNavigate();
    function handleInputUsuario(e){
        setInputUsuario(e.target.value)
    }


    function handleInputSenha(e){
        setInputSenha(e.target.value)
    }

    function handleButtonLogar(){
        axios.get(`http://localhost:3001/login?usuario=${inputUsuario}&senha=${inputSenha}`)
          .then((data)=>{
            localStorage.setItem('cre', data.data)
            alert("Login efetuado com sucesso!");
            navigate("/cadastrarEditarDeletar")
          })
          .catch((err)=>{
           if(err.response){
            alert(err.response.data.message)
        }
          })

    }

    return(
        <div>
            <div className="divH1Login">
                <h1>Login</h1>
            </div>
            
            <div className="divInputs">
                
                <input onChange={(e)=>handleInputUsuario(e)} type="text" placeholder="Usuário" className="inputUsuarioTelaLogin"/>
                <br/>
                <input onChange={(e)=>handleInputSenha(e)} type="password" placeholder="Senha" className="inputSenhaTelaLogin"/>
                <br/>
                <button onClick={handleButtonLogar} className="buttonTelaLogin">Logar</button>

            </div>  
        </div>
    )
}

export default TelaLogin;