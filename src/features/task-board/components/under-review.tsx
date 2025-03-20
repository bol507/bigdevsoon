import { Priority } from "../interfaces/task"
import Card from "./card"

const UnderReview = () => {
  const taskList = [
      {
        id: 1,
        title: "Mobile App Feature - Push Notifications",
        priority: "HIGH" as Priority,
        date: "2/11/24",
        content: "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
        avatars: [
       
          "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
      } 
  ]
  return (
    <section className="space-y-5">
      <Card priority={taskList[0].priority} date={taskList[0].date} title={taskList[0].title}  content={taskList[0].content} avatars={taskList[0].avatars} />
    </section>
  )
}

export default UnderReview