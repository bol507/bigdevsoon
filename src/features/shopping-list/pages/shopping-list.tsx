import { useEffect, useState } from "react";
import OrderSummary from "../components/order-summary";
import ProductList from "../components/product-list";
import PromoCode from "../components/promo-code";

const ShoppingList = () => {
  const [items, setItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculatedShipping = 0;
    const calculatedTax = subTotal * 0.08;

    if (subTotal < 50) {
      calculatedShipping = subTotal * 0.1;
    }

    setShipping(calculatedShipping);
    setTax(subTotal * 0.08);
    setTotal(subTotal + calculatedShipping + calculatedTax);
  }, [subTotal]);
  return (
    <section className="w-screen h-screen bg-zinc-200 text-zinc-900 p-12 grid justify-items-center overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 justify-items-center">
        <ProductList items={items} setItems={setItems} subTotal={subTotal} setSubTotal={setSubTotal} />
        <div className="flex flex-col w-full h-auto space-y-6">
          <OrderSummary subTotal={subTotal}  tax={tax} shipping={shipping} total={total} />
          <PromoCode />
        </div>
      </div>
    </section>
  );
};

export default ShoppingList;
