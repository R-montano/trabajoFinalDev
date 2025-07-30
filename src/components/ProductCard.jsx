const ProductCard = ({ product }) => {
  return (
    <div className="flex place-content-around px-2 py-2">
      <div
        className="w-80 p-6 bg-white shadow-xl gap-1 text-center .mt-2 mb-2"
        key={product.id}
      >
        <img
          className="w-[100px] h-[130px] mx-auto"
          src={product.image}
          alt=""
        />

        <p className="mt-4 font-bold">{product.title}</p>

        <span className="opacity-75 font-semibold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
