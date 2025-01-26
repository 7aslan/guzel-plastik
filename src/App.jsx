import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductsPage from "./pages/ProductsPage";
import MachinesPage from "./pages/MachinesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} />
        <Route path="/makineler" element={<MachinesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
