const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
      <p className="text-lg text-gray-600 mb-6">
        Si tienes alguna pregunta o inquietud, no dudes en contactarnos.
      </p>
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Tu correo electrónico"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contact;
