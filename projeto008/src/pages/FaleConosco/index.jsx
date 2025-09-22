// projeto008\src\pages\FaleConosco\index.jsx


import './styles.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
    }
    return (
        <section className='contato'>
            <h1>Fale Conosco</h1>
            <p className="lead">Precisando de ajuda? Aqui você encontra respostas para suas principais dúvidas, além de canais de atendimento digitais, pra te ajudar com tudo que precisar!</p>

            <form className='formulario' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span>Nome:</span>
                        <input type="text" placeholder="Seu nome" required />
                    </label>
                    <label className='field'>
                        <span>Email:</span>
                        <input type="email" placeholder="seu@email.com" required />
                    </label>
                    <label className='field'>
                        <span>Telefone:</span>
                        <input type="tel" placeholder="(00) 00000-0000" required />
                    </label>
                </div>
                <label className='field'>
                    <span>Assunto:</span>
                    <select id="assunto" name="assunto" required>
                        <option value="" disabled selected>Escolha o assunto...</option>
                        <option value="duvidas">Dúvidas sobre Serviços</option>
                        <option value="sugestoes">Sugestões e Melhorias</option>
                        <option value="reclamacoes">Reclamações e Problemas</option>
                        <option value="outros">Outros</option>
                    </select>
                </label>

                <label className='field'>
                    <span>Mensagem:</span>
                    <textarea rows="6" placeholder="Escreva sua mensagem aqui..." required></textarea>
                </label>
                <button className='btn primary' type='submit'>Enviar Mensagem</button>
            </form>

            {/* SEÇÃO DE DÚVIDAS DENTRO DO CONTÊINER */}
            <section className='duvidas'>
                <div className='duvidas__container'>
                    <h2>Principais Dúvidas</h2>
                    <div className="duvidas__lista">
                        <details className="duvida">
                            <summary>Como faço para abrir uma conta?</summary>
                            <p>Para abrir sua conta Itaú, basta acessar nosso site ou aplicativo e seguir o passo a passo. O processo é simples, rápido e 100% digital!</p>
                        </details>
                        <details className="duvida">
                            <summary>Onde encontro a segunda via do meu boleto?</summary>
                            <p>Você pode emitir a segunda via de boletos diretamente pelo nosso aplicativo ou pelo internet banking, na seção de pagamentos e boletos. É fácil e seguro!</p>
                        </details>
                        <details className="duvida">
                            <summary>Quais são os horários de atendimento das agências?</summary>
                            <p>Nossas agências físicas funcionam de segunda a sexta-feira, das 10h às 16h, exceto em feriados. Você também pode contar com o nosso atendimento digital 24 horas.</p>
                        </details>
                        <details className="duvida">
                            <summary>Como posso entrar em contato por telefone?</summary>
                            <p>Para falar com a nossa central de atendimento, ligue para 4004-4828 para capitais e regiões metropolitanas, ou 0800 970 4828 para outras localidades.</p>
                        </details>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default FaleConosco;
// testando