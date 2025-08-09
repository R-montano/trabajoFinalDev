const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-[#E8D6B3] via-[#F7F7F7] to-[#2A3B56]">
      <h1 className="text-4xl font-bold text-black mb-4 text-center">
        Sobre Nosotros
      </h1>
      <p className="text-lg text-black max-w-3xl text-center mb-8">
        En Mi Tienda Online, nuestra misión es ofrecer productos de alta calidad
        a precios accesibles. Nos apasiona brindar una experiencia de compra
        única, confiable y rápida. ¡Gracias por confiar en nosotros!
      </p>
      <div className="text-black max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Quiénes somos?</h2>
        <p className="text-lg">
          Somos un equipo dedicado a ofrecer lo mejor en productos y atención al
          cliente. Nos esforzamos por hacer que cada compra sea rápida y fácil,
          garantizando la mejor calidad en cada uno de nuestros artículos.
        </p>
      </div>
      <div className="text-black max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
        <p className="text-lg">
          Ofrecer productos innovadores y de calidad, brindando una experiencia
          de compra sin igual y un servicio al cliente excepcional. Nuestra
          misión es garantizar la satisfacción total de cada cliente.
        </p>
      </div>
      <a
        href="/contact"
        className="mt-8 bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg"
      >
        Contáctanos
      </a>
    </div>
  );
};

export default About;
