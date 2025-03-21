import { Priority } from "../interfaces/task"
import Card from "./card"

const InProgress = () => {
  const taskList = [
    {
      id: 1,
      title: "Bug fix - User registration",
      priority: "LOW" as Priority,
      date: "2/13/24",
      
      content: "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
      avatars: [
       
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 2,
      title: "Social Media Campaign",
      priority: "MEDIUM" as Priority,
      date: "2/15/24",
      image: "https://framerusercontent.com/images/lhO3wCtY6GsUW6VtKwuDKljNI.png",
      content: "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
      avatars: [
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    }

  ]

  
  return (
    <section className="space-y-5">
      <div className="flex items-center">
        <h2 className="text-xl font-bold">In progress</h2>
        <button className="ml-4 text-2xl font-bold text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
          +
        </button>
      </div>
      <Card priority={taskList[0].priority} date={taskList[0].date} title={taskList[0].title} image={taskList[0].image} content={taskList[0].content} avatars={taskList[0].avatars} />
      <Card priority={taskList[1].priority} date={taskList[1].date} title={taskList[1].title} image={taskList[1].image} content={taskList[1].content} avatars={taskList[1].avatars} />
    </section>
  )
}

export default InProgress