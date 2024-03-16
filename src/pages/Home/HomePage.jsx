import React from 'react'
import Main from '../../component/Main/Main'
import Collections from '../../component/Collections/Collections'
import Category from '../../component/Category/Category'
import Products from '../../component/Products/Products'

const HomePage = () => {
  return (
    <div>
      <Main />
      <Collections />
      <Category />
      <Products />
    </div>
  )
}

export default HomePage
