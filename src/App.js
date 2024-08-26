import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Pages/Shop";
import Homepage from "./components/Homepage";
import Header from "./components/Parts/Header";
import Footer from "./components/Parts/Footer";
import BuyPage from "./components/Pages/BuyPage";
import CartPage from "./components/Pages/CartPage";
import ProductDetails from "./components/Pages/ProductDetails"; // Import ProductDetails component

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Buy" element={<BuyPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/productdetails/:category/:id" element={<ProductDetails />} />
          <Route path="/Buy/:category/:id" element={<ProductDetails />} />
          {/* Add this line */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
