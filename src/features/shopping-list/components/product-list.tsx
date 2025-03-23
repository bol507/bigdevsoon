
import { useState } from "react";
import ProductCard from "./product-card";

   

interface ProductListProps {
  items: number;
  setItems: (items: number) => void;
  subTotal: number;
  setSubTotal: (subTotal: number) => void;
}
const ProductList = ({items, setItems, subTotal, setSubTotal}:ProductListProps) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Illuminating face cream",
      price: 12.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4fREBIQ4xq19eCvUy8mMlODWPLcJwTKkIsoGyuzTzwtBzYs4TQAebgA3ExdzoQFg3FU&usqp=CAU",
    },
    {
      id: 2,
      title: "Illuminating face cream",
      price: 9.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFlxXtpIdrogo--zlY5TToYqRf0VaNseYUgwFE7gY1Byx2kjkcLeQJzQQ8EG2eXrZMKA&usqp=CAU",
    },
    {
      id: 3,
      title: "Intense lift up serum",
      price: 29.99,
      image:"https://images.unsplash.com/photo-1617546268343-b2505faf1ee8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
    },
    {
      id: 4,
      title: "CBD Premium Oil",
      price: 32.99,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__o22OfvHLQ0gAGRsnAHZeJqbOYAhOFlYj3O666GWWu7PvWwDp6HZUfwLcA0NhkflGCg&usqp=CAU"
    },
    
  ]); 
  const handleRemove = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    console.log(id);
    setProducts(updatedProducts);
  };
 
  return (
    <div className="flex flex-col w-full h-auto border border-zinc-200 rounded-xl shadow-md bg-white p-4 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row w-full h-auto  items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">Your product list</h1>
        <span>{items} items</span>
      </div>
      <div className="flex flex-col w-full h-auto space-y-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}  
            setITems={setItems} 
            items={items} 
            setSubTotal={setSubTotal}
            subTotal={subTotal}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
