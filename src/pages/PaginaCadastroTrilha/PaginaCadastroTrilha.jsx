import { useForm } from "react-hook-form";
import styles from "./PaginaCadastroTrilha.module.css";

function PaginaCadastroTrilha() {
 const { register } = useForm();

 return (
  <div className="container">
   <h1>Cadastro de nova trilha</h1>

   <form className={styles.form}>
    <div>
     <label htmlFor="nome-trilha">Nome da trilha</label>
     <input
      type="text"
      {...register("name", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 100,
        message: "Este campo aceita no máximo 100 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="durazao-estimada">Duração estimada (min)</label>
     <input
      type="number"
      {...register("durazao-estimada", {
       required: "Este campo é obrigatório"
      })}></input>
    </div>
    <div>
     <label htmlFor="trajeto">Trajeto (km)</label>
     <input
      type="number"
      {...register("trajeto", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 4,
        message: "Esse campo aceita no maximo 4 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="cidade">Cidade</label>
     <input
      type="text"
      {...register("cidade", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 60,
        message: "Este campo aceita no maximo 60 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="estado">Estado</label>
     <input
      type="text"
      {...register("estado", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 2,
        message: "Este campo aceita no maximo 2 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="nome-usuario">Nome completo usuário</label>
     <input
      type="text"
      {...register("nome-usuario", {
       maxLength: {
        value: 60,
        message: "Este campo aceita no maximo 60 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="dificuldade">Dificuldade</label>
     <select name="dificauldade">
      <option value="Selecione">Selecione uma opção</option>
      <option value="Iniciante">Iniciante</option>
      <option value="intermediário">intermediário</option>
      <option value="Avançado">Avançado</option>
     </select>
    </div>
    <div>
     <label htmlFor="type">Tipo de trilha</label>
     <select name="type">
      <option value="Selecione">Selecione uma opção</option>
      <option value="Caminhada">Caminhada</option>
      <option value="Trekking">Trekking</option>
     </select>
    </div>
    <div>
     <label htmlFor="url-imagem">URL imagem da trilha</label>
     <input
      type="text"
      {...register("url-imagem", {
       maxLength: { value: 300 }
      })}></input>
    </div>
   </form>
   <div className="buttons">
    <button>Cadastrar</button>
    <button>Voltar</button>
   </div>
  </div>
 );
}

export default PaginaCadastroTrilha;
