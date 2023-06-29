import React,{useEffect, useState} from "react"
import { Link,useNavigate } from "react-router-dom"
import './cadastrarEditarDeletar.css'
import jwt_decode from 'jwt-decode';

function CadastrarEditarDeletar(){
    const[decodedTokenState,setDecodedTokenState] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        try{
            const decodedToken = jwt_decode(localStorage.getItem('cre'))
            setDecodedTokenState(decodedToken)
        }
        catch(err){
            alert("Você não está logado!")
            navigate('/loginUsuario')
        }
    },[])

    return(
        <div>

            <div>
                <Link to="/" className="LinkUsuarioCadastraEditaDeleta" onClick={()=>localStorage.removeItem('cre')}>Voltar para Login</Link>
               <span className="spanUsuarioCadastraEditaDeleta">Usuário:{decodedTokenState?decodedTokenState.usuario:''}</span>
            </div>

            <div className="divH2CadEditDelet">
                <Link to="/cadastrarColaborador"> <h2>Cadastrar</h2> </Link>
                <br/>
                <br/>
                <Link to="/editarColaborador"> <h2>Editar</h2> </Link>
                <br/>
                <br/>
                <Link to="/deletarColaborador"> <h2>Deletar</h2> </Link>
            </div>
        </div>
    )
}

export default CadastrarEditarDeletar