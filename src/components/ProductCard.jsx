import { useCartContext } from "../context/CartContext";
import Layout from "./Layout";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col items-center p-4">
      <img
        src={product.image}
        alt=""
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-center font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-blue-700 font-medium text-base mb-4">
        ${product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
