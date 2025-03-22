import StarRating from "./start-rating";
import Like from "./like";
import Carrousel from "./carrousel";

const Card = () => {
  

  return (
    <div className="flex flex-col w-[80%] md:w-[380px] h-[600px] bg-white rounded-xl shadow-md border border-zinc-800 justify-between">
      <Carrousel />
      <div className="flex items-center justify-between p-4 ">
        <div className="flex flex-col items-start">
          <h1 className="text-zinc-700 font-bold ">Gramercy Tavern</h1>
          <p className="text-zinc-700 text-xs">20th St NewYork</p>
          <div className="flex items-center ">
            <StarRating />
            <span className="text-zinc-700 text-xs">(231 reviews)</span>
          </div>
        </div>
        <Like />
      </div>

      <p className="text-zinc-700 text-left p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas nam,
        excepturi quae, optio aperiam nesciunt facilis voluptatem dolore
        cupiditate incidunt laborum. Autem repellendus soluta obcaecati tempore
        at delectus unde.
      </p>

      <div className="bg-black flex flex-col justify-center items-center h-[75px] rounded-b-xl">
        <p className="text-white font-bold cursor-pointer">
          Make a reservation
        </p>
      </div>
    </div>
  );
};

export default Card;
