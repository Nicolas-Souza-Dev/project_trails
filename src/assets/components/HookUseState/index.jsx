import { useState, useEffect } from "react";
import "./index.css";

function HookUseState() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch("/trilhas.json");
    if (!response.ok) {
     throw new Error("Falha ao carregar os dados");
    }
    const jsonData = await response.json();
    setData(jsonData);
   } catch (error) {
    setError(error);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, []);

 if (loading) return <div>Carregando...</div>;
 if (error) return <div>Erro: {error.message}</div>;

 return (
  <div className="card_container">
   <div></div>

   {data && (
    <ul>
     {data.map((item, index) => (
      <li key={index}>
       <div className="card_dados">
        <img className="card_imagem" src={item.urlImagem} width={200} />
        <div>{item.nomeTrilha}</div>
        <div>{item.cidade}</div>
        <div>{item.estado}</div>
        <div>{item.duracao} minutos</div>
        <div>{item.trajeto}</div>
        <div>{item.dificuldade}</div>
        <div>{item.tipo}</div>
        <div className="nome_usuario">{item.nomeUsuario}</div>
       </div>
      </li>
     ))}
    </ul>
   )}
  </div>
 );
}

export default HookUseState;
