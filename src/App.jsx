import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductsPage from "./pages/ProductsPage"; // Import the new ProductsPage
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductsPage />} /> {/* The route to display all products */}
      </Routes>
    </Router>
  );
}

export default App;
