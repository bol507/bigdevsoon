import { Priority } from "../interfaces/task"
import PriorityBadge from "./priority-badge"

interface CardProps {
  priority: Priority
  date: string
  image?: string
  title: string
  content: string
  avatars?: string[]
}

const Card = ({priority,date, title,image,content,avatars}: CardProps) => {
  return (
    <div className="w-full h-auto border border-zinc-300 rounded-2xl bg-zinc-50 shadow-xl p-5 space-y-4">
      <div className="flex justify-between items-center">
        <PriorityBadge priority={priority} />
        <span className="text-zinc-400 font-semibold text-md">{date}</span>
      </div>
      {image && <img src={image} alt="image" className="w-full h-32 object-cover rounded-2xl" />}
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg text-left font-semibold text-zinc-700">{content}</p>
      <ul className="flex items-center h-fit relative ml">
        {avatars?.map((avatar, index) => (
          <li key={index} style={{ marginLeft: index > 0 ? '-15px' : '0', zIndex:"10"}}>
            <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
           
          </li>
        ))}
        <li className="border-2 border-dashed rounded-full border-zinc-500 ml-[-15px] h-10 w-10 flex items-center justify-center p-0 ">
          <span className="text-black font-extrabold text-xl mt-[-5px] ml-0.5">+</span>
        </li>
      </ul>
    </div>
  )
}

export default Card