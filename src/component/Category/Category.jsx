import "./Category.scss";
import cateFirst from "../../assets/cateFirst.svg";
import cateSecond from "../../assets/cateSecond.svg";
import cateThirt from "../../assets/cateThirt.svg";
import cateFour from "../../assets/cateFour.svg";
import { Typography } from "@mui/material";

const categoryData = [
  {
    name: "Camisetas",
    img: cateFirst,
  },
  {
    name: "Calças",
    img: cateSecond,
  },
  {
    name: "Bonés",
    img: cateSecond,
  },
  {
    name: "Headphones",
    img: cateThirt,
  },
  {
    name: "Tênis",
    img: cateFour,
  },
];

const Category = () => {
  return (
    <div className="container category">
      <h2 className="seaction-title">Coleções em destaque</h2>
      <div className="c-cards">
        {categoryData.map(el => {
            return (
                <div className="category-card"key={el.name}>
                <div className="c-card-img">
                  <img src={el.img} alt="" />
                </div>
                <Typography>{el.name}</Typography>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default Category;
