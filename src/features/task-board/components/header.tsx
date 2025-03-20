const Header = () => {
  const headers = [
    "To do",
    "In progress",
    "Under review",
    "Done"
  ]
  return (
    <section className="mt-4 w-full grid grid-cols-4 gap-4">
      {headers.map((header, index) => (
        <div key={index} className="flex items-center ">
          <h2 className="text-xl font-bold">{header}</h2>
          <button className="ml-4 text-2xl font-bold text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
            +
          </button>
        </div>
      ))}
       
    </section>
    )
}

export default Header