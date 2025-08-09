const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-[#E8D6B3] via-[#F7F7F7] to-[#2A3B56]">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
        Bienvenido a <span className="text-blue-700">Mi Tienda Online</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        Encuentra los mejores productos al mejor precio. Calidad garantizada con
        entrega rápida.
      </p>
      <a
        href="/productslist"
        className="mt-8 bg-blue-700 hover:bg-blue-800 text-white text-lg font-medium py-3 px-6 rounded-xl transition"
      >
        Ver productos
      </a>
    </div>
  );
};

export default Home;
