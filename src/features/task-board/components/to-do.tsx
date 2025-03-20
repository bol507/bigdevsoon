import { Priority } from "../interfaces/task"
import Card from "./card"

const ToDo = () => {
  const taskList = [
    {
      id: 1,
      title: "Update Website Homepage",
      priority: "HIGH" as Priority,
      date: "2/15/24",
      image: "https://i.pinimg.com/280x280_RS/68/41/8e/68418ecdd70890bb07c6d4236c2dc180.jpg",
      content: "Revise the content and layout of the homepage to highlight new features and improve user engagement."
    }   
  ]

  const avatars = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1651346158507-a2810590687f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  
  return (
    <section className="space-y-5">
      <Card priority={taskList[0].priority} date={taskList[0].date} title={taskList[0].title} image={taskList[0].image} content={taskList[0].content} avatars={avatars} />
    </section>
  )
}

export default ToDo