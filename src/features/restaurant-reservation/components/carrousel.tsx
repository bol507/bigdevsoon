import { useEffect, useMemo, useState } from "react";

const Carrousel = () => {
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
    <div
        className="rounded-t-xl flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "225px",
          transition: "all 0.5s ease-in-out",
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

  )
}

export default Carrousel;