import { Priority } from "../interfaces/task"
import Card from "./card"

const Done = () => {
  const taskList = [
    {
      id: 1,
      title: "Content Creation - Blog Post",
      priority: "LOW" as Priority,
      date: "2/09/24",
      content: "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals ans SEO optimization.",
      avatars: [
       
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 2,
      title: "IT Security Audit",
      priority: "MEDIUM" as Priority,
      date: "2/07/24",
      image: "https://img.freepik.com/fotos-premium/fondo-colorido-textura-acuarela-palabra-amor_900775-42538.jpg",
      content: "Write and publish a blog post about industry trends and their impact on our products/services. Include relevant visuals ans SEO optimization.",
      avatars: [
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    }
  ]
  return (
    <section className="space-y-5">
      <div className="flex items-center">
        <h2 className="text-xl font-bold">Done</h2>
        <button className="ml-4 text-2xl font-bold text-zinc-500 hover:text-zinc-700 transition-all duration-300 ease-in-out">
          +
        </button>
      </div>
      <Card priority={taskList[0].priority} date={taskList[0].date} title={taskList[0].title} content={taskList[0].content} avatars={taskList[0].avatars} />
      <Card priority={taskList[1].priority} date={taskList[1].date} image={taskList[1].image} title={taskList[1].title} content={taskList[1].content} avatars={taskList[1].avatars} />
    </section>
  )
}

export default Done