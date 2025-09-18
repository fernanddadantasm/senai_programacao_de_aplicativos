// projeto008\src\pages\Servicos\index.jsx

import './styles.css'

function Servicos() {
    return (
        <section className='servicos'>
            <h1>Nossos Serviços</h1>
            <p>Conheça as soluções completas que o Itaú oferece para você e sua empresa.</p>

            <div className='grid cols-3'>
                <div className='card'>
                    <h3>Custódia e Controladoria</h3>
                    <p>Conheça os serviços de custódia e controladoria de fundos de investimento prestados pelo grupo Itaú.</p>
                </div>
                
                <div className='card'>
                    <h3>Soluções Financeiras</h3>
                    <p>Serviços bancários e soluções tecnológicas para o administrador gerenciar seu fluxo financeiro com eficiência.</p>
                </div>

                <div className='card'>
                    <h3>Assessoria de Investimentos</h3>
                    <p>Conte com nossos especialistas para encontrar as melhores oportunidades de investimento para o seu perfil.</p>
                </div>
            </div>
        </section>
    )
}

export default Servicos;
