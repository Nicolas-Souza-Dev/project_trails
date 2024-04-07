import CardTrilha from "./assets/components/CardTrilha/index";
import HookUseState from "./assets/components/HookUseState";
import "./App.css";

function App() {
 //TRILHA 1
 let listaTrilhas = [
  {
   nomeTrilha: "Trilha da Lagoinha do Leste",
   cidade: "Florianópolis",
   estado: "SC",
   duracao: 120,
   trajeto: 4,
   dificuldade: "Intermediário",
   tipo: "caminhada / trekking",
   nomeUsuario: "Nicolas Souza",
   urlImagem:
    "https://images.pexels.com/photos/1270718/pexels-photo-1270718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
 ];

 return (
  <div className="container">
   <h1 className="titulo">Explore trilhass incríveis</h1>
   {listaTrilhas.map((trilha, index) => (
    <CardTrilha dadosTrilha={trilha} key={index} />
   ))}
   <HookUseState />
  </div>
 );
}

export default App;
