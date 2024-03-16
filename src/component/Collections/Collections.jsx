import "./Collections.scss";
import supreme from "../../assets/supreme.svg";
import nike from "../../assets/kara.svg";
import hoko from "../../assets/naushnik.svg";
import { Typography } from "@mui/material";
import Button from "../UI/Button/Button";


const cardData = [
    {
        image: supreme,
        name: 'Novo dro Supreme',
        sale: 30
    },
    {
        image: nike,
        name: 'Coleção Adidas',
        sale: 30
    },
    {
        image: hoko,
        name: 'Novo Beats Bass',
        sale: 30
    }
]

const Collections = () => {
  return (
    <div className="container collections">
        <h2 className="seaction-title">Coleções em destaque</h2>
        <div className="c-cards">
            {cardData.map(el => {
                return(
                    <div className="c-card" style={{background: `url(${el.image}) no-repeat`}} key={el.name}>
                        <Typography variant="h6">{el.sale} % OFF</Typography>
                        <Typography variant="h4">{el.name}</Typography>
                        <Button w='153px'>Comprar</Button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Collections
