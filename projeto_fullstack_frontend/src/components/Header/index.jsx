// src\components\Header\index.jsx

import {Link} from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header className="header-container">
            <div classname="logop">Gerenciamento de Usuários</div>

            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/cadastro">Cadastrar</Link>
                <Link to= "/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;