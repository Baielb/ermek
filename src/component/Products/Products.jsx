import EastIcon from "@mui/icons-material/East";
import { Box, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import nike1 from "../../assets/nike1.svg";
import "./Products.scss";
import { useEffect, useState } from "react";
import productsApi from "../../api/productsApi";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productsApi.getProducts();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <h2>...Loading</h2>;
  }
  return (
    <div className="container products">
      <div className="products-header">
        <h1 className="seaction-title">Produtos em alta</h1>
        <Typography
          className="more"
          sx={{ color: "#c92871", fontSize: "18px" }}
        >
          Ver todos <EastIcon />
        </Typography>
      </div>
      <div className="products-card">
        {products.map(prod => (
          <Box key={prod.id} sx={{ width: 292  }}>
            <Card
              sx={{
                p: "20px",
                height: 266,
                boxShadow: "box-shoadow: 0px -6px 12px -100px rgba(0,0,0,0.1)",
                mb: "18px",
              }}
            >
              {prod.sale ? (
                 <Typography
                 borderRadius={"30px"}
                 p={"5px 15px"}
                 fontSize={"14px"}
                 variant="body2"
                 bgcolor={"#E7FF86"}
                 maxWidth={96}
                 height={32}
               >
                 {prod.sale}% OFF
               </Typography>
              ) : null}
              <CardMedia
                component="img"
                width={248}
                height="194"
                image={nike1}
                alt="Paella dish"
              />
            </Card>
            <Typography variant="body2" color={"#8F8F8F"}>
              Tênis
            </Typography>
            <Typography
              variant="h6"
              color={"#474747"}
              fontSize={"24px"}
              fontWeight={700}
            >
              K-Swiss V8 - Masculino
            </Typography>
            <Typography
              variant="h6"
              color={"#8f8f8f"}
              fontSize={"24px"}
              fontWeight={400}
            >
              <span>$200</span>
              <span
                style={{ color: "#1f1f1f", fontWeight: 700, marginLeft: "8px" }}
              >
                $100
              </span>
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Products;
