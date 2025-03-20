import Done from "../components/done"
import Header from "../components/header"
import InProgress from "../components/in-progress"
import ToDo from "../components/to-do"
import UnderReview from "../components/under-review"

const TaskBoard = () => {
  return (
    <div className="w-screen h-screen bg-zinc-200 text-zinc-900 flex flex-col items-start justify-start px-16 py-20">
      <h1 className="text-4xl font-bold">Boards</h1>
      <Header />
      <div className="mt-4 w-full grid grid-cols-4 gap-4">
        <ToDo />
        <InProgress />
        <UnderReview />
        <Done />
      </div>
    </div>
  )
}

export default TaskBoard