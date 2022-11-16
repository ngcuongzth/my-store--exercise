import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage, ProductsPage, SingleProductPage,CartPage, LoginPage, AboutPage } from './pages'
import SharedLayout from './components/SharedLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />}></Route>
          <Route path="products/:product_id" element={<SingleProductPage />} />
          <Route path="cart" element={<CartPage/>}/>
          <Route path="login" element={<LoginPage/>} />
          <Route path="about" element={<AboutPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App