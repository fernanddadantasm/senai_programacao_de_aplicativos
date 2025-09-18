import './App.css';
import { useState } from 'react';

function App() {
  const [produto, setProduto] = useState('');  // valor do input
  const [produtos, setProdutos] = useState(["Cuscuz", "Feijão Carioca", "Arroz Branco"]); // lista de produtos

  const adicionarProduto = () => {
    const nomeProduto = produto.trim();

    if (!nomeProduto) {
      alert("Digite um nome válido.");
      return;
    }

    if (produtos.includes(nomeProduto)) {
      alert("O produto já existe!");
      return;
    }

    setProdutos([...produtos, nomeProduto]);
    setProduto(''); // limpar o input
  };

  return (
    <div className="App"> 
      <h1>Adicionar Produtos</h1>

      <input
        type="text"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        placeholder="Digite o nome do produto"
      />

      <button onClick={adicionarProduto}>Adicionar Produto</button>

      <hr />

      <h2>Lista de Produtos</h2> 
      <ol>
        {produtos.map((prod, index) => (
          <li key={index}>{prod}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;