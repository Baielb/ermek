import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout/Layout'
import HomePage from '../pages/Home/HomePage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout /> }>
            <Route index element={<HomePage />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
