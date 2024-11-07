import React, { useEffect, useMemo, useRef, useState } from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import { useGetWebBannerLinksQuery } from "../../redux/api/bannerApi";

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const flickingRef = useRef<Flicking | null>(null);

  const { data: banners } = useGetWebBannerLinksQuery(undefined);

  // Configure the autoplay plugin with a 2-second transition
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
    <div className="hidden content_container bg-white mx-auto mt-2 md:mt-10 rounded-none md:rounded-xl">
      <Flicking
        ref={flickingRef}
        plugins={plugins}
        className="carousel w-full h-full overflow-y-hidden"
        circular={true}
        renderOnlyVisible={true}
        duration={2000} // Set transition duration to 2 seconds
        onChanged={() => {
          const allPanels = document.querySelectorAll(".carousel-item");
          allPanels.forEach(panel => panel.classList.remove("fade"));
        }}
      >
        {banners &&
          banners[0]?.link?.map((url: string, index: number) => (
            <div
              key={index}
              id={`item${index + 1}`}
              className="panel carousel-item w-full flex justify-center items-center fade"
            >
              <img
                src={url}
                className="w-full h-full object-contain transition-opacity duration-2000 ease-in-out"
                alt={`Banner ${index + 1}`}
              />
            </div>
          ))}
      </Flicking>

      {/* Navigation Buttons */}
      <div className="flex w-full justify-center gap-2 py-2">
        {banners &&
          banners[0]?.link?.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => moveToSlide(i)}
              className={`btn btn-xs deepPurple text-white ${
                i === 0 ? "active" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default HeroSection;
