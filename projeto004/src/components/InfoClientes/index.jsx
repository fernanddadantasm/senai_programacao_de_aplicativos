// src\components\InfoClientes\index.jsx
import { useState } from 'react'; 
// Não precisa importar um CSS específico aqui, vamos usar o App.css para tudo

function InfoCliente() { 
    const [nome, setNome] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [listaClientes, setListaClientes] = useState ([]); 

    function adicionarCliente(event) { 
        event.preventDefault(); 
        setListaClientes([...listaClientes, { nome, email}]); 
        setNome(''); 
        setEmail(''); 
    } 
     
    return ( 
        // Adicionamos uma classe ao container principal para estilizar
        <div className="form-container"> 
            <h2>Cadastro do Cliente</h2> 
            <form onSubmit={adicionarCliente}> 
                <div> 
                    <label>Nome:</label> 
                    <input type="text"  
                        value={nome}  
                        onChange={(e) => setNome(e.target.value)}  
                        required 
                    /> 
                </div> 
                <div> 
                    <label>Email:</label> 
                    <input type="email"  
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}  
                        required 
                    /> 
                </div>  
                <button type="submit">Adicionar Cliente</button> 
            </form> 
            
            <h3>Lista de Clientes</h3> 
            <ul> 
                {listaClientes.map((cliente, index) => ( 
                    <li key={index}>{cliente.nome} - {cliente.email}</li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 

export default InfoCliente;