import OrderSummary from "../components/order-summary";
import ProductList from "../components/product-list";
import PromoCode from "../components/promo-code";

const ShoppingList = () => {
  return (
    <section className="w-screen h-screen bg-zinc-200 text-zinc-900 flex flex-col items-start justify-start px-12  overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-4 ">
        <ProductList />
        <div className="flex flex-col w-full h-auto space-y-6">
          <OrderSummary />
          <PromoCode />
        </div>
      </div>
    </section>
  );
};

export default ShoppingList;
