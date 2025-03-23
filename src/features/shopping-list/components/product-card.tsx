import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  setITems: (item: number) => void;
  items: number;
  setSubTotal: (subtotal: number) => void;
  subTotal: number;
  handleRemove: (id: number) => void;
}

const ProductCard = ({
  product,
  setITems,
  items,
  setSubTotal,
  subTotal,
  handleRemove,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    setITems(items + 1);
    setSubTotal(subTotal + product.price);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setITems(items - 1);
      setSubTotal(subTotal - product.price);
    }
  };

  const handleRemoveDispatcher = (id: number) => {
    handleRemove(id);
  };

  return (
    <div className="w-full h-auto flex flex-row  justify-center items-center">
      <div className="flex  items-center justify-start md:mr-4 p-0 ">
        <img
          src={product.image}
          alt={product.title}
          className="w-28 h-28 rounded-xl"
        />
      </div>

      <div className="flex flex-row justify-between flex-grow gap-4">
        <div className="flex flex-col justify-start items-start gap-4 ml-2 ">
          <p className="text-lg :md:text-xl ">{product.title}</p>
          <div className="flex items-center flex-row gap-2">
            <button
              className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl"
              onClick={() => handleMinus()}
            >
              –
            </button>
            <span>{quantity}</span>
            <button
              className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl"
              onClick={() => handleAdd()}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex md:ml-auto  flex-col  items-end gap-4">
          <button
            onClick={() => handleRemoveDispatcher(product.id)}
            className="text-xl font-['Nunito'] font-bold  text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out"
          >
            X
          </button>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
