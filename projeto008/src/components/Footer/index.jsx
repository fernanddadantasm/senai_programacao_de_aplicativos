// src/components/Footer/index.jsx

import './styles.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrap'>
                {/* Informações da empresa */}
                <div className="footer__section">
                    <h3> Itaú Unibanco Holding S.A.</h3>
                    <p>CNPJ: 60.872.504/0001-23</p>
                    <p>Praça Alfredo Egydio de Souza Aranha, 100, Torre Olavo Setubal, Parque Jabaquara - CEP 04344-902 - São Paulo - Brasil</p>
                </div>

                <hr className='divider' /> {/* Linha de separação */}

                {/* Contato e Atendimento */}
                <div className="footer__section">
                    <h3>Fale com o Itaú</h3>
                    <p>SAC 0800 728 0728</p>
                    <p>Ouvidoria 0800 570 0011</p>
                    <p>Denúncia</p>
                </div>

                <p className='copy'>&copy; 2025 Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;




