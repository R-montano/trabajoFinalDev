import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Outlet>
          {/* Aqui es donde react-router-dom renderiza el componete desde la ruta hija
          por ejemplo Home, Contact */}
        </Outlet>
      </main>
    </div>
  );
};

export default Layout;
