// projeto-novo\src\components\ListarUsuarios\index.jsx

import React from 'react';
import './styles.css'; // Importa os estilos locais

// O componente recebe a lista de 'usuarios' através das props
function ListarUsuarios({ usuarios }) {
  return (
    <div className="lista-usuarios-container">
      <h2>Usuários Cadastrados</h2>
      
      {/* Verificação: Se a lista (array de usuários) tiver 0 itens, 
        mostra uma mensagem. Se tiver mais de 0, mostra a lista. 
      */}
      {usuarios.length > 0 ? (
        <ul>
          {}
          {usuarios.map((usuario, index) => (
            <li key={index} className="usuario-item">
              <strong>Nome:</strong> {usuario.nome} <br />
              <strong>Email:</strong> {usuario.email} <br />
              <strong>Número:</strong> {usuario.numero}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum usuário cadastrado ainda.</p>
      )}
    </div>
  );
}

export default ListarUsuarios;