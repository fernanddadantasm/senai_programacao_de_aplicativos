// projeto008\src\components\Footer\index.jsx

import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='footer__wrap'>
                <div>
                    <strong>Itau</strong> - CNPJ: 60.701.190/0001-04
                </div>
                <div>
                    Av. Paulista, 1234 - São Paulo, SP
                </div>
                <div className= 'copy'> © {new Date().getFullYear()} Todos os direitos reservados.

                </div>
            </div>
        </footer>
    );
}


export default Footer;


