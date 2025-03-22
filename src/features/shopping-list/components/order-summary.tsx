const OrderSummary = () => {
  return (
    <div className="flex flex-col w-full h-fit border border-zinc-200 rounded-xl shadow-md bg-white  ">
      <div className="w-full p-8 space-y-6">
        <div className="w-full h-auto flex  items-center justify-between">
          <h1 className="text-2xl font-bold">Order summary</h1>
        </div>
        <div className="flex flex-col w-full h-auto space-y-5">
          <div className="flex  w-full h-auto items-center justify-between">
            <span className="text-xl">Subtotal</span>
            <p className="text-xl font-bold">$12.99</p>
          </div>
          <div className="flex  w-full h-auto items-center justify-between">
            <span className="text-xl">Tax</span>
            <p className="text-xl font-bold">$2.99</p>
          </div>
          <div className="flex  w-full h-auto items-center justify-between">
            <span className="text-xl">Shipping</span>
            <p className="text-xl font-bold">$0.99</p>
          </div>
        </div>
      </div>
      <hr className="border-zinc-200 w-full" />
      <div className="p-8 space-y-6">
        <div className="flex  w-full h-auto items-center justify-between">
          <span className="text-2xl font-bold">Total</span>
          <p className="text-2xl font-bold">$92.84</p>
        </div>
        <button className=" bg-black text-white w-full rounded h-12 text-xl">
          Pay now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
