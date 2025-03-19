import { HeartIcon } from "lucide-react";
import StarRating from "./start-rating";

const Card = () => {
  return (
    <div className="flex flex-col w-[380px] h-[600px] bg-white rounded-xl shadow-md border border-zinc-800 justify-between">
      <div
        className="rounded-t-xl flex flex-col justify-end items-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/fotos-premium/cuadro-culinario-lienzo-alimentos-plato-imagenes_960396-67460.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <ul className="list-none p-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <li
              key={i}
              className="inline-block w-2 h-2 m-1 bg-zinc-100 rounded-[50%]"
            ></li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between p-4 ">
        <div className="flex flex-col items-start">
          <h1 className="text-zinc-700 font-bold ">Gramercy Tavern</h1>
          <p className="text-zinc-700 text-xs">20th St NewYork</p>
          <div className="flex items-center ">
            <StarRating />
            <span className="text-zinc-700 text-xs">(231 reviews)</span>
          </div>
        </div>
        <HeartIcon className="text-zinc-700" />
      </div>

      <p className="text-zinc-700 text-left p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas nam,
        excepturi quae, optio aperiam nesciunt facilis voluptatem dolore
        cupiditate incidunt laborum. Autem repellendus soluta obcaecati tempore
        at delectus unde.
      </p>

      <div className="bg-black flex flex-col justify-center items-center h-[75px] rounded-b-xl">
          <p className="text-white font-bold">Make a reservation</p>
      </div>
    </div>
  );
};

export default Card;
