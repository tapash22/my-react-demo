import { useCart } from "../hooks/useCart";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Phone",
    price: 800,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Watch",
    price: 200,
    image: "https://via.placeholder.com/150",
  },
];

export const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow p-4 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover"
          />
          <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
