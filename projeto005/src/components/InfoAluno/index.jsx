// senai_programacao_de_aplicativos\projeto-vite\src\components\InfoAluno\index.jsx
import './styles.css'


function InfoAluno() {
    const nome = "Fernanda Dantas";
    const idade = 22;
    const curso = "Desenvolvimento de Sistemas";

    return (
        <div className="info-aluno">
        <h2>Informações do Aluno</h2>
        <p>Nome: Fernanda Dantas </p>
        <p>Idade: 22 anos</p>
        <p>Curso: Desenvolvimento de Sistemas </p>
        </div>
    );
    }

export default InfoAluno;