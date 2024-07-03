import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product.jsx";
import Category from "./pages/Category/Category";
import CartPage from "./pages/Cart/Cart.jsx";

const Roots = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Roots;
