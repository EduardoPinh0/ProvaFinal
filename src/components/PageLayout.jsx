import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const PageLayout = () => {
  const DrawerApp = () => (
    <Box style={{ minWidth: "260px"} } >
    
      <Typography variant="h5">Menuuu</Typography>
      <List>
        <ListItem>
          <ListItemButton component="a" href="/">
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/sobre">
            <ListItemText primary={"Sobre"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/noticias">
            <ListItemText primary={"Notícias"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/contatos">
            <ListItemText primary={"Contato"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary={"Album"} component="a" href="/album" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false);

    const lideComOMenu = () => {
      setAberto(!aberto);
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComOMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <div style={{ padding: "10px" }}>
              <img
                style={{ maxHeight: "60px" }}
                src="data:image/png;base64,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"
              />
            </div>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer open={aberto} onClose={lideComOMenu}>
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "80px" }}>
        <Outlet />
      </Box>
    </>
  );
};
