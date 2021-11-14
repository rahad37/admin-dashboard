import React from 'react';
import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topBar/TopBar';
import './App.css';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import NewProduct from './pages/newProduct/NewProduct';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
      <SideBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/users' element={<UserList />}></Route>
          <Route exact path='/user/:userId' element={<User />}></Route>
          <Route exact path='/newUser' element={<NewUser />}></Route>
          <Route exact path='/products' element={<ProductList />}></Route>
          <Route exact path='/product/:productId' element={<Product />}></Route>
          <Route exact path='/newproduct' element={<NewProduct />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;