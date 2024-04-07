import { useState } from "react";

function HookUseState() {
 const [valorAleatorio, setValorAleatorio] = useState();

 console.log("Houve uma nova renderização");

 return (
  <div>
   <button onClick={() => setValorAleatorio(Math.random())}>
    Gerar Valor Aleatório
   </button>
   <h4>{valorAleatorio}</h4>
  </div>
 );
}

export default HookUseState;
