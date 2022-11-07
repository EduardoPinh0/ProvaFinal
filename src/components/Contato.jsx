import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const multiMes = () => {
    setContador(contador * contador);
  };

  const zerarMes = () => {
    setContador(0);
  };


  useEffect(() => {}, [contadorAux]);

  return (
    <div>
      <div>
        <h1>Contato</h1>
        </div>
      <div>
      <h1>Segue abaixo nossos Aumeios para depositar a farinha na cumbuca: </h1>
      <p>PIX: Pagina HOME</p>
      <p>Ou traga presencialmente na casa da vovózinha</p>
      </div>
      
    </div>
  );
};

export default Contador;
