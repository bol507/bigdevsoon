
interface CardProps {
  priority: string
  date: string
  image?: string
}

const Card = ({priority,date, image}: CardProps) => {
  return (
    <div className="w-full h-[300px] border border-zinc-300 rounded-2xl bg-zinc-50 shadow-xl p-5">
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold border border-pink-500 bg-pink-500 rounded-lg px-0.5 text-white">{priority}</span>
        <span className="text-zinc-400 font-semibold text-md">{date}</span>
      </div>
      {image && <img src={image} alt="image" className="w-full h-32 mt-4 object-cover rounded-xl" />}
    </div>
  )
}

export default Card