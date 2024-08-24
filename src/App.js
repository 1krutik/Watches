import { Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Pages/Shop";
import Homepage from "./components/Homepage";
import Header from "./components/Parts/Header";
import Footer from "./components/Parts/Footer";
import BuyPage from "./components/Pages/BuyPage";

function App() {
  return (
    <>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Buy" element={<BuyPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
