import React from 'react'
import Logo from "../../assets/logo.svg";
import SearchInput from '../UI/searchInput/SearchInput';
import Button from '../UI/Button/Button';
import { IconButton } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import  "./Header.scss";

const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='header__search'>
          <SearchInput />
        </div>
        <div className='header__buttons'>
          <Button>RU</Button>
          <span>|</span>
          <Button>Entrar</Button>
        </div>
        <div className='header__cart'>
          <IconButton>
            <ShoppingCartRounded />
          </IconButton>
        </div>
      </header>
    </div>
  )
}

export default Header
