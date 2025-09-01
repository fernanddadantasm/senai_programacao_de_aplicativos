
import './App.css'
import DadosCurso from './components/DadosCurso'
import InfoAluno from './components/InfoAluno'
import Mensagem from './components/Mensagem'

function App() {
 

  return (
  //  Fragment
   <>
   <div className='info-aluno'>
      <h1>Bem vindo Aluno!</h1>
      <Mensagem />
      <hr />
      <InfoAluno/>
      <hr />
      <DadosCurso />
   </div>
     
    </>
  )
}

export default App
