import Card from "./card"

const ToDo = () => {
  const taskList = [
    {
      id: 1,
      title: "Task 1",
      priority: "HIGH",
      date: "2/15/24",
      image: "https://i.pinimg.com/280x280_RS/68/41/8e/68418ecdd70890bb07c6d4236c2dc180.jpg"
    }   
  ]

  return (
    <section>
      <Card priority={taskList[0].priority} date={taskList[0].date}  />
    </section>
  )
}

export default ToDo