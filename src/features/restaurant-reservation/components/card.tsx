import StarRating from "./start-rating";
import Like from "./like";
import { useEffect, useMemo, useState } from "react";

const Card = () => {
  const images = useMemo(() => [
    "https://img.freepik.com/fotos-premium/cuadro-culinario-lienzo-alimentos-plato-imagenes_960396-67460.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/19/95/50/schlabbergass.jpg?w=1800&h=-1&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ca/90/93/img-20180429-131626-bokeh.jpg?w=1000&h=600&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f6/5b/00/dinner-for-two.jpg?w=1000&h=600&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/19/94/68/schlabbergass.jpg?w=1000&h=600&s=1"
  ],[]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images]);

  return (
    <div className="flex flex-col w-[380px] h-[600px] bg-white rounded-xl shadow-md border border-zinc-800 justify-between">
      <div
        className="rounded-t-xl flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "225px",
        }}
      >
        <ul className="list-none p-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={index}
              className={`inline-block w-2 h-2 m-1 rounded-full ${
                index === currentImageIndex ? 'bg-zinc-500' : 'bg-zinc-100'
              }`}
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
