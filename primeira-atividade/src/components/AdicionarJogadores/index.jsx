import React, { useState } from 'react';
import './styles.css';

function AdicionarJogadores() {
    const [jogadores, setJogadores] = useState([]);
    const [nome, setNome] = useState('');
    const [numeroCamisa, setNumeroCamisa] = useState('');

    function handleAdicionarJogador(event) {
        event.preventDefault();
        setJogadores([...jogadores, { nome, numeroCamisa }]);
        setNome('');
        setNumeroCamisa('');
    }

    function removerJogador(indexParaRemover) {
        const novaListaDeJogadores = jogadores.filter((_, index) => index !== indexParaRemover);
        setJogadores(novaListaDeJogadores);
    }

    return (
        <div className="container-jogadores">
            <h2>Adicionar Jogadores</h2>
            <form onSubmit={handleAdicionarJogador}>
                <input
                    type="text"
                    placeholder="Nome do Jogador"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Número da Camisa"
                    value={numeroCamisa}
                    onChange={(e) => setNumeroCamisa(e.target.value)}
                    required
                />
                <button type="submit">Adicionar</button>
            </form>
            <h3>Lista de Jogadores</h3>
            {jogadores.length === 0 ? (
                <p className="mensagem-vazia">Nenhum jogador adicionado ainda.</p>
            ) : (
                <ul className="lista-jogadores">
                    {jogadores.map((jogador, index) => (
                        <li key={index}>
                            {jogador.nome} - Camisa {jogador.numeroCamisa}
                            <button onClick={() => removerJogador(index)} className="btn-remover">
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AdicionarJogadores;

