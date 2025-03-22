import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  setITems: (item:number) => void;
  items: number;
  setSubTotal: (subtotal:number) => void;
  subTotal: number;
  handleRemove: (id:number) => void;
}

const ProductCard = ({ product, setITems, items, setSubTotal, subTotal, handleRemove }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);
  
  const handleAdd = () => {
    setQuantity(quantity + 1);
    setITems(items+ 1);
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
  }

  return (
    <div className="w-full h-auto flex gap-4 items-center ">
      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-28 rounded-xl"
      />
      <div className="flex flex-col gap-2 space-y-2">
        <p className="text-xl">{product.title}</p>
        <div className="flex items-center gap-2">
          <button className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl" onClick={() => handleMinus()}>
            –
          </button>
          <span>{quantity}</span>
          <button className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl" onClick={() => handleAdd()}>
            +
          </button>
        </div>
      </div>
      <div className="flex items-end flex-col gap-2 space-y-2 ml-auto">
        <button onClick={() => handleRemoveDispatcher(product.id)} className="text-xl font-['Nunito'] font-bold  text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
          X
        </button>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
