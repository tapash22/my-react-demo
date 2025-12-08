import { useCart } from "../hooks/useCart";

export const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul className="list-disc pl-5">
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
