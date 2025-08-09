import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">🛍 Mi Tienda</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/productslist" className="hover:underline">
          Productos
        </Link>
        <Link to="/about" className="hover:underline">
          Nosotros
        </Link>
        <Link to="/contact" className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
