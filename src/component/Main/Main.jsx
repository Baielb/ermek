import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";
import Button from "../UI/Button/Button";
import buts from "../../assets/buts.svg";
import { Pagination } from 'swiper/modules';
import position from "../../assets/position.svg";

const Main = () => {
  return (
    <div className="bg-main">
      <div className="container">
        <Swiper
        style={{background: '#F5F5F5'}}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box width={"495px"} pt={"124px"}>
              <Typography variant="h6" mb={"20px"}>
                Melhores ofertas personalizadas
              </Typography>
              <Typography
              width={'400px'}
                fontWeight={800}
                fontSize={"64"}
                mb={"20px"}
                variant="h3"
              >
                Queima de stoque Nike 🔥
              </Typography>
              <Typography mb={"40px"} fontSize={"18px"} variant="body1">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </Typography>
              <Button w={"220px"}>Ver Ofertas</Button>
            </Box>
            <Box pt="64px">
              <img src={buts} alt="" />
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box width={"495px"} pt={"124px"}>
              <Typography variant="h6" mb={"20px"}>
                Melhores ofertas personalizadas
              </Typography>
              <Typography
              width={'400px'}
                fontWeight={800}
                fontSize={"64"}
                mb={"20px"}
                variant="h3"
              >
                Queima de stoque Nike 🔥
              </Typography>
              <Typography mb={"40px"} fontSize={"18px"} variant="body1">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </Typography>
              <Button w={"220px"}>Ver Ofertas</Button>
            </Box>
            <Box pt="64px">
              <img src={buts} alt="" />
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box width={"495px"} pt={"124px"}>
              <Typography variant="h6" mb={"20px"}>
                Melhores ofertas personalizadas
              </Typography>
              <Typography
              width={'400px'}
                fontWeight={800}
                fontSize={"64"}
                mb={"20px"}
                variant="h3"
              >
                Queima de stoque Nike 🔥
              </Typography>
              <Typography mb={"40px"} fontSize={"18px"} variant="body1">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </Typography>
              <Button w={"220px"}>Ver Ofertas</Button>
            </Box>
            <Box pt="64px">
              <img src={buts} alt="" />
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
