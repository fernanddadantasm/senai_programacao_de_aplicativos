// projeto008\src\pages\Home\index.jsx

import './styles.css';

function Home() {
    return (
        <div className='home'>
            <section className='hero'>
                <div className= 'hero__text'>
                    <h1>O banco feito para o seu futuro, hoje</h1>
                    <p>Gerencie sua conta, peça seu cartão e invista no seu futuro com a segurança e a tecnologia que só o Itaú oferece. Tudo na palma da sua mão.</p>
                    <div className='hero__cta'>
                        <Link to="/servicos" className='btn primary'> Conheça Nossos Serviços</Link>
                        <Link to='/fale-conosco' className='btn'> Fale com a nossa equipe</Link>
                        <div/>

                    </div>
                </div>
                <div className='hero__image'>
                    <img src={hero} alt="Equipe de Atendimento" />

                </div>
            </section>

            <section className='features'>
                <h2>Vantagens que só o Itaú oferece</h2>
                <div className='grid cls-3'>
                    <div className='card'>
                        <h3>Atendimneto Prioritário</h3>
                        <p>Suporte rápido</p>
                    </div>
                    <div className='card'>
                        <h3>Seu dinheiro trabalhando por você.</h3>
                        <p>Descubra as melhores opções de investimento para o seu perfil com a ajuda dos nossos especialistas. Comece a investir hoje e planeje seu futuro.</p>
                    </div>
                </div>

            </section>
            <section className='socialProof'>
                <div className='socialProof__image'>
                    <img src={office} alt='Escritório da empresa'/>              
                </div>
                <div className='socialProof__text'>
                    <h2>Uma rede com 2.617 agências em todo o Brasil</h2>
                    <p>A confiança do atendimento humano e especializado em cada canto do país.</p>
                </div>
            </section>
        </div>
      
    
    )

}

export default Home
        

