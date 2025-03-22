import { Link } from "react-router"

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#242424] text-white">
      <h1 className="text-4xl font-bold">Welcome to BigDevSoon challenge solutions</h1>
      <Link to="/restaurant-reservation">#12 Go to restaurant reservation</Link>
      <Link to="/task-board">#13 Go to task board</Link>
      <Link to="/shopping-list">#14 Go to shopping list</Link>

    </div>
  )
}

export default Home