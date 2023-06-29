import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDeUsuario from "./componentes/cadastroUsuario/cadastroUsuario";
import TelaLogin from "./componentes/telaLogin/telaLogin";
import CadastrarEditarDeletar from "./componentes/cadastrarEditarDeletar/cadastrarEditarDeletar";
import React,{useEffect} from 'react'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <Routes>
          {!localStorage.getItem('cre')?<Route exact path="/" component={TelaLogin} />:<Route exact path="/" component={<CadastrarEditarDeletar/>} />}
          <Route path='/cadastroUsuario' element={<CadastroDeUsuario/>}></Route>
          <Route path='/loginUsuario' element={<TelaLogin/>}></Route>
          <Route path='/cadastrarEditarDeletar' element={<CadastrarEditarDeletar/>}></Route>
        </Routes>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
