import { BrowserRouter, Route, Link, Routes,useLocation,useNavigate } from "react-router-dom";
import CadastroDeUsuario from "./componentes/cadastroUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/cadastroUsuario' element={<CadastroDeUsuario/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
