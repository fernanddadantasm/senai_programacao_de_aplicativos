// senai_programacao_de_aplicativos\projeto-vite\src\components\DadosCurso\index.jsx
import './styles.css'
function DadosCurso() {
    const nome_curso = "Desenvolvimento de Sistemas";
    const carga_horaria = "1.200hs";
    const local = "Dendezeiros";
    const data_inicio = "19/02/2025";
    const data_termino = "20/12/2026";

    return (
        <div className="dados-curso">
        <h2>Detalhes do Curso</h2>
        <p>Nome do Curso: {nome_curso}</p>
        <p>Carga Horária: {carga_horaria}</p>
        <p>Local: {local}</p>
        <p>Data de Início: {data_inicio}</p>
        <p>Data de Término: {data_termino}</p>
        
        </div>
    );
    }

export default DadosCurso;

