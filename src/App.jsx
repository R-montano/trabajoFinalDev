import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import { useUserContext } from "./context/UserContext";
import Layout from "./components/Layout";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {
  const { nombre } = useUserContext();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div className="min-h-screen flex flex-col">
              <Home />
            </div>
          }
        />
        <Route
          path="/productslist"
          element={
            <div className="flex flex-1 overflow-hidden">
              <div className="w-4/5">
                <ProductsList />
              </div>
            </div>
          }
        />
        <Route className="" path="/about" element={<About />} />
        <Route className="" path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <div className="w-1/5">
              <Cart />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
