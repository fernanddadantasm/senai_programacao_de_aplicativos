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
            <p>Precisando de ajuda? Aqui você encontra respostas para suas principais dúvidas, além de canais de atendimento digitais, pra te ajudar com tudo que precisar!</p>

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
                    <span>Assuntos:</span>
                    <input type="text" required placeholder="Qual o assunto?" />
                </label>

                <label className='field'>
                    <span>Mensagem:</span>
                    <textarea rows="6" placeholder="Escreva sua mensagem aqui..." required></textarea>
                </label>
                <button className='btn primary' type='submit'>Enviar Mensagem</button>


            </form>
        </section>
    )
}

export default FaleConosco