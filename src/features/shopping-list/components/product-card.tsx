interface ProductCard {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ product }: { product: ProductCard }) => {
  
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
          <button className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl">
            –
          </button>
          <span>2</span>
          <button className="bg-zinc-200  rounded-lg px-2 py-0 font-bold text-xl">
            +
          </button>
        </div>
      </div>
      <div className="flex items-end flex-col gap-2 space-y-2 ml-5">
        <button className="text-xl font-['Nunito'] font-bold  text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
          X
        </button>
        <p className="text-lg font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
