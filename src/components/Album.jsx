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
        <h1>Lobosomem Album</h1>
      </div>
      <div>Au</div>
    </div>
  );
};

export default Contador;
