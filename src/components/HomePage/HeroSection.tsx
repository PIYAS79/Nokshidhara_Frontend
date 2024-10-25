import React, { useEffect, useMemo, useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const flickingRef = useRef<Flicking | null>(null);

  const plugins = useMemo(
    () => [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })],
    []
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const moveToSlide = (index: number) => {
    if (flickingRef.current) {
      flickingRef.current.moveTo(index);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="content_container h-[500px] lightPurple mx-auto mt-10">
      <Flicking
        ref={flickingRef}
        plugins={plugins}
        className="carousel w-full h-full"
        circular={true}
        renderOnlyVisible={true}
      >
        <div id="item1" className="panel carousel-item w-full">
          <img
            src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785752/dogs-5021084_1280_xsbjtw.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item2" className="panel carousel-item w-full">
          <img
            src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/puppy-5124947_1280_jah2xz.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item3" className="panel carousel-item w-full">
          <img
            src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/animal-7220153_1280_losnoc.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <div id="item4" className="panel carousel-item w-full">
          <img
            src="https://res.cloudinary.com/do7nin6oo/image/upload/v1729785751/animal-4118585_1280_avrssk.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </Flicking>

      {/* Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        <button onClick={() => moveToSlide(0)} className="btn btn-xs deepPurple text-white">
          1
        </button>
        <button onClick={() => moveToSlide(1)} className="btn btn-xs deepPurple text-white">
          2
        </button>
        <button onClick={() => moveToSlide(2)} className="btn btn-xs deepPurple text-white">
          3
        </button>
        <button onClick={() => moveToSlide(3)} className="btn btn-xs deepPurple text-white">
          4
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
