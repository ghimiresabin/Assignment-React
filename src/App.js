import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Component/Product";

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
