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
    <section className="relative w-screen h-screen text-zinc-900 p-2 md:p-12 overflow-auto">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0  backdrop-blur-sm" />
      <div className="relative z-10 grid justify-items-center h-full">
        <div className="grid grid-cols-1 w-full md:w-auto md:grid-cols-2 gap-6 justify-items-center pb-4">
          <ProductList
            items={items}
            setItems={setItems}
            subTotal={subTotal}
            setSubTotal={setSubTotal}
          />
          <div className="flex flex-col w-full h-auto space-y-6">
            <OrderSummary
              subTotal={subTotal}
              tax={tax}
              shipping={shipping}
              total={total}
            />
            <PromoCode />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingList;
