import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        console.log(respData);
        setData(respData.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      
      {isLoading ? (
        <div>Auuu Loading</div>
      ) : (
        data.map((produto) => (
          <Grid
            item={true}
            xs={12}
            md={4}
            lg={2}
            display="flex"
            alignItems="stretch"
            key={produto.id}
          >
            <Card
              key={produto.id}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "stretch",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={produto.thumbnail}
                alt={produto.brand}
              />
              <CardContent style={{ display: "flex", flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {produto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {produto.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">AUUUpartilhar</Button>
                <Button size="small">DOE MAIS</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FetchProducts;
