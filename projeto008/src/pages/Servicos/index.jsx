// projeto008\src\pages\Servicos\index.jsx


// src/pages/Servicos/index.jsx

import React from 'react';
import './styles.css';

function Servicos() {
    return (
        <section className='services'>
            <h1>Nossos Serviços</h1>
            <p className='lead'>Conheça as soluções completas que o Itaú oferece para você e sua empresa.</p>

            <div className='grid cols-3'>

                {/* Card 1 - Custódia e Controladoria */}
                <div className='card'>
                    <h3>Custódia e Controladoria</h3>
                    <p>Conheça os serviços de custódia e controladoria de fundos de investimento prestados pelo grupo Itaú.</p>
                </div>

                {/* Card 2 - Soluções Financeiras */}
                <div className='card'>
                    <h3>Soluções Financeiras</h3>
                    <p>Serviços bancários e soluções tecnológicas para o administrador gerenciar seu fluxo financeiro com eficiência.</p>
                </div>

                {/* Card 3 - Assessoria de Investimentos */}
                <div className='card'>
                    <h3>Assessoria de Investimentos</h3>
                    <p>Conte com nossos especialistas para encontrar as melhores oportunidades de investimento para o seu perfil.</p>
                </div>

                {/* 4. NOVO CARD: Cartão de Crédito */}
                <div className='card'>
                    <h3>Cartão de Crédito</h3>
                    <p>Peça seu cartão de crédito com benefícios exclusivos e a segurança do Itaú. Gerencie tudo pelo aplicativo.</p>
                </div>
                
                {/* 5. NOVO CARD: Empréstimos */}
                <div className='card'>
                    <h3>Empréstimos</h3>
                    <p>Solicite empréstimos com taxas competitivas e de forma 100% online. Simule e contrate sem sair de casa.</p>
                </div>

                {/* 6. NOVO CARD: Seguros */}
                <div className='card'>
                    <h3>Seguros</h3>
                    <p>Proteja seu futuro e de sua família com as opções de seguro de vida, residencial e automotivo que o Itaú oferece.</p>
                </div>

            </div>
        </section>
    );
}

export default Servicos;
// testando