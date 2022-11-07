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

  useEffect(() => {
    if (contador > 12) {
      setContadorAux(true);
      setMensagem("O ano possui apenas 12 meses");
    } else {
      setContadorAux(false);
    }
  }, [contador]);

  useEffect(() => {}, [contadorAux]);

  return (
    <div>
      <div>
        <h1>Quem somos nós?</h1>
        </div>
      <div>
        Lobisomem Pidão é uma lenda brasileira, aparece em chats alheios solicitando farinha na cumbuca.
      </div>
      <div> <img src="https://img.ifunny.co/images/bed74c56657348c57be337c18695a42835023636c0c983c3f674c94dae8c2cb4_1.webp" alt="" /></div>
      
    </div>
  );
};

export default Contador;
