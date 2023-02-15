import React from "react";
import Header from "./components/Header";
import "./Styles.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Order from "./components/Order";
import OrderForm from "./components/OrderForm";
import AllProducts from "./components/AllProducts";
import ProductDetailes from "./components/ProductDetailes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Logout from "./components/Logout";


export default function App() {


  return (

    <div className="App">.

      <Header />
      <hr style={{ margin: "10px" }} />
      <Router>
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cakes" exact element={<AllProducts />} />
          <Route path="/cakes/:cId" exact element={<ProductDetailes />} />
          <Route path="/order" exact element={<Order />} />
          <Route path="/orderForm" exact element={<OrderForm />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/logout" exact element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
