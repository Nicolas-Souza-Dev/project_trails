import { useForm } from "react-hook-form";
import styles from "./PaginaCadastroTrilha.module.css";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";

function PaginaCadastroTrilha() {
 const { register, handleSubmit } = useForm();
 const { addTrail } = useContext(TrilhasContext);
 const navigate = useNavigate();

 function sendForm(formValue) {
  console.log(formValue);

  addTrail({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });

  navigate("/lista-trilhas");
 }

 return (
  <div className="container">
   <h1>Cadastro de nova trilha</h1>

   <form className={styles.form} onSubmit={handleSubmit(sendForm)}>
    <div>
     <label htmlFor="nomeTrilha">Nome da trilha</label>
     <input
      type="text"
      {...register("nomeTrilha", {
       required: "Este campo é obrigatório",
       maxLength: {
        value: 100,
        message: "Este campo aceita no máximo 100 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="duracao">Duração estimada (min)</label>
     <input
      type="number"
      {...register("duracao", {
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
     <label htmlFor="nomeUsuario">Nome completo usuário</label>
     <input
      type="text"
      {...register("nomeUsuario", {
       maxLength: {
        value: 60,
        message: "Este campo aceita no maximo 60 caracteres"
       }
      })}></input>
    </div>
    <div>
     <label htmlFor="dificuldade">Dificuldade</label>
     <select
      name="dificuldade"
      {...register("dificuldade", {
       required: "Este campo é obrigatório"
      })}>
      <option value="Selecione">Selecione uma opção</option>
      <option value="Iniciante">Iniciante</option>
      <option value="intermediário">intermediário</option>
      <option value="Avançado">Avançado</option>
     </select>
    </div>
    <div>
     <label htmlFor="tipo">Tipo de trilha</label>
     <select
      name="type"
      {...register("tipo", {
       required: "Este campo é obrigatório"
      })}>
      <option value="Selecione">Selecione uma opção</option>
      <option value="caminhada / trekking">Caminhada / Trekking</option>
      <option value="ciclismo">Ciclismo</option>
     </select>
    </div>
    <div>
     <label htmlFor="urlImagem">URL imagem da trilha</label>
     <input
      type="text"
      {...register("urlImagem", {
       maxLength: { value: 300 }
      })}></input>
    </div>
    <div className="buttons">
     <button type="submit">Cadastrar</button>
     <button>Voltar</button>
    </div>
   </form>
  </div>
 );
}

export default PaginaCadastroTrilha;
