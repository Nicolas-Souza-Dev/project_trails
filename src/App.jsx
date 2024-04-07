import CardTrilha from './assets/components/CardTrilha/index'
import "./App.css"

function App() {

  let listaTrilhas = [
    {
      nomeTrilha: "Trilha Lagoinha do Leste",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Intermediário",
      tipo: "caminhada / trekking",
      nomeUsuario: "Nicolas Souza",
      urlImagem: "https://images.pexels.com/photos/1270718/pexels-photo-1270718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ]

  return (
    <div className="container">
      <h1 className="titulo">Explore trilhas incríveis</h1>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
    </div>
  )
}

export default App;