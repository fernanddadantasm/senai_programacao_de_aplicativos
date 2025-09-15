// projeto-novo\src\components\CadastrarUsuario\index.jsx

import React, { useState } from 'react';
import './styles.css';

function CadastrarUsuario({ onCadastrarUsuario }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    const cadastrar = (event) => {
        event.preventDefault();
        onCadastrarUsuario({ nome, email, numero });
        setNome('');
        setEmail('');
        setNumero('');
    }

    return (
        <>
            <form onSubmit={cadastrar}>
                <h2>Cadastrar novo usuário</h2>
                <input
                    type="text"
                    placeholder="Nome do usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel" // Usar "tel" é mais apropriado para números de telefone
                    placeholder="Número do usuário"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}

export default CadastrarUsuario;