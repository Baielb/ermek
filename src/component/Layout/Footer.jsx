import "./Footer.scss";
import Logo2 from "../../assets/logo2.svg";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

const arr = [
  "Sobre Drip Store",
  "Segurança",
  "Wishlist",
  "Blog",
  "Trabalhe conosco",
  "Meus Pedidos",
];
const categoryData = ["Camisetas", "Calças", "Bonés", "Headphones", "Tênis"];


const Footer = () => {
  return (
    <footer>
      <div className="container footer content">
        <div className="footer-logo">
          <img src={Logo2} alt="logo" />
          <Typography className="logo-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </div>
        <div className="footer-info">
          <Typography fontSize={"18px"} mb="28px">
            Informação
          </Typography>
          <List>
            {arr.map((el) => (
              <ListItem key={el} style={{ padding: "0", paddingBottom: "8px" }}>
                <ListItemText primary={el} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="footer-category">
          <Typography fontSize={"18px"} mb="28px">
            Categorias
          </Typography>
          <List>
            {categoryData.map((el) => (
              <ListItem key={el} sx={{ p: 0, pb: "8px" }}>
                <ListItemText primary={el} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className="footer-contacts">
          <Typography fontSize={"18px"} mb="28px">
            Contato
          </Typography>
          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      <div className="container">
        <Divider sx={{ bgcolor: "#fff" }} component="div" />
        <Typography textAlign={"center"} mt="23px" color={"#fff"}>
          @ 2022 Digital College
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
