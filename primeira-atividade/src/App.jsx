import './App.css';
import logo from './assets/images/logo.png'; 
import AdicionarJogadores from './components/AdicionarJogadores';

function App() {
  return (
    <div className="app-container">
      <img src={logo} alt="Escudo do Esporte Clube Vitória" className="logo" />
      <h1>Bem-vindo ao site da seleção!</h1>
      <AdicionarJogadores />
    </div>
  );
}

export default App;