import React, { useState } from 'react';
import './App.css';
import CadastrarUsuario from './components/CadastrarUsuario';
import ListarUsuarios from './components/ListarUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const adicionarUsuario = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Usuários</h1>
      <CadastrarUsuario onCadastrarUsuario={adicionarUsuario} />
      <hr />
      <ListarUsuarios usuarios={usuarios} />
    </div>
  );
}

export default App;
