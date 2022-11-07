import { Alert, Button, Grid } from "@mui/material";
import { width } from "@mui/system";
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
      setMensagem("terra é plana? Ano. 12. meses");
    } else {
      setContadorAux(false);
    }
  }, [contador]);

  useEffect(() => {}, [contadorAux]);

  return (
    
    <Grid container style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "aquamarine" }}>
      <h1>AUUU Vindo!</h1>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>Doe pro pidão: </h3>
        <h3>AUAU</h3>
        <img
          src="https://pbs.twimg.com/media/FYxTSBQXgAUWz5q.png"
          alt=""
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <h3>Pix: 47996981805</h3>
        <img
          src="data:image/png;base64,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"
          alt=""
          style={{ width: "80%", height: "80%"}}
        />
      </Grid>
      <Grid xs={12}>
        <h3>Doe doe doe. </h3>
      </Grid>
    </Grid>
  );
};

export default Contador;
