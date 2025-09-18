// projeto008\src\components\Header\index.jsx
import { Link, NavLink } from "react-router-dom";
import '/styles.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo do site" />
                    <span>Itau Home</span>
                </Link>
                <nav className="nav">
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Serviços
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Sobre Nós
                    </NavLink>
                    <NavLink to="/fale-conosco" className={({ isActive }) => isActive ? 'link active' : 'link'}>
                        Contato
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;