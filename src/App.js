import React from "react";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./container/AllProducts/AllProducts";
import Home from "./container/Home/Home";
import Layout from "./container/Layout/Layout";
import Login from "./container/Login/Login";
import UploadProduct from "./container/UploadProduct/UploadProduct";

function App() {
  return (
    <Routes>
      	<Route path="/" element={<Layout />}>
          <Route index element={<Login />}/>
          <Route path="home" element={<Home />}/>
          <Route path="detail/:id" element={<Home />}/>
          <Route path="all" element={<AllProducts />}/>
          <Route path="upload" element={<UploadProduct />}/>
        </Route>
    </Routes>
  )
}

export default App;
