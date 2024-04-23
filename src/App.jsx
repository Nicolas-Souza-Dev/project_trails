import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";
import Footer from "../src/components/Footer/footer.jsx";

function App() {
<<<<<<< HEAD

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
=======
 return (
  <TrilhasContextProvider>
   <Header />
   <Outlet />
   <Footer />
  </TrilhasContextProvider>
 );
>>>>>>> feature/semana-13
}

export default App;
