

const PromoCode = () => {
  return (
    <div className="flex flex-col w-full h-auto border border-zinc-200 rounded-xl shadow-md bg-white p-8 space-y-6">
      <div className="w-full h-auto flex  items-center justify-between">
        <h1 className="text-2xl font-bold">Promo code</h1>
      </div>
      <input type="text" className="w-full h-12 rounded-xl border border-zinc-200 p-2" placeholder="Enter your promo code" />
    </div>
  )
}

export default PromoCode