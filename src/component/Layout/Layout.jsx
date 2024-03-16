import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import HeaderMenu from './HeaderMenu'

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderMenu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
