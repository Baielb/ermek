import React from 'react'
import { Typography, Box } from "@mui/material";

const HeaderMenu = () => {
  return (
    <Box  className="container" sx={{display: 'flex', gap: '32px', mb: '30px', mt: '40px'}}>
        <Typography borderBottom={'2px solid #c92071'} fontWeight={800} color={"#c92071"}>Home</Typography>
        <Typography color={"#474747"}>Productos</Typography>
        <Typography color={"474747"}>Categorias</Typography>
        <Typography color={"474747"}>Meus Pedidos</Typography>
    </Box>
  )
}

export default HeaderMenu
