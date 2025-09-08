import './App.css'; // <<--- ESTA LINHA É ESSENCIAL!
import logo from './assets/images/logo.png';
import InfoCliente from './components/InfoClientes';

function App() { 
  return ( 
    <> 
      <img src={logo} alt="logo" className="app-logo" /> 
      <InfoCliente /> 
    </> 
  );
} 

export default App;