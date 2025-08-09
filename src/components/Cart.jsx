import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        return <p key={cartItems.id}>{cartItems.title}</p>;
      })}
    </div>
  );
};

export default Cart;
