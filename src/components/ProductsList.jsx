import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchProducts("https://fakestoreapi.com/products");

  console.log(products);
  if (loading) {
    return <div>Cargando Productos....</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div className="bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
