import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Pages/singleProduct";


const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/:productId' element={<SingleProduct/>} />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;
