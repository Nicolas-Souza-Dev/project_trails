import styles from "./PaginaCadastroTrilha.module.css";

function PaginaCadastroTrilha() {
 return (
  <div className="container">
   <h1>Cadastro de nova trilha</h1>

   <form className={styles.form}>
    <div>
     <label htmlFor="nome-trilha">Nome da trilha</label>
     <input type="text" name="" id="nome-trilha"></input>
    </div>
    <div>
     <label htmlFor="durazao-estimada">Duração estimada (min)</label>
     <input type="number" name="duracao-estimada" id=""></input>
    </div>
    <div>
     <label htmlFor="trajeto">Trajeto (km)</label>
     <input type="number" name="trajeto" id=""></input>
    </div>
    <div>
     <label htmlFor="cidade">Cidade</label>
     <input type="text" name="cidade" id=""></input>
    </div>
    <div>
     <label htmlFor="estado">Estado</label>
     <input type="text" name="estado" id=""></input>
    </div>
    <div>
     <label htmlFor="nome-usuario">Nome completo usuário</label>
     <input type="text" name="nome-usuario" id=""></input>
    </div>
    <div>
     <label htmlFor="dificuldade">Dificuldade</label>
     <select name="dificauldade">
      <option value="Iniciante">Iniciante</option>
      <option value="intermediário">intermediário</option>
      <option value="Avançado">Avançado</option>
     </select>
    </div>
    <div>
     <label htmlFor="type">Tipo de trilha</label>
     <select name="type">
      <option value="Caminhada">Caminhada</option>
      <option value="Trekking">Trekking</option>
     </select>
    </div>
    <div>
     <label htmlFor="url-imagem">URL imagem da trilha</label>
     <input type="text" name="url-imagem" id=""></input>
    </div>
   </form>

   <button>Cadastrar</button>
   <butto>Voltar</butto>
  </div>
 );
}

export default PaginaCadastroTrilha;
