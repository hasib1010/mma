"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const corners = [
  {
    className: "parallax-corner parallax-top-left",
    src: "/top-left.png",
    sizes: "(max-width: 768px) 72vw, 34vw",
    translateX: ["-26px", "26px"],
    translateY: ["-34px", "34px"],
  },
  {
    className: "parallax-corner parallax-top-right",
    src: "/top-right.png",
    sizes: "(max-width: 768px) 72vw, 34vw",
    translateX: ["26px", "-26px"],
    translateY: ["-34px", "34px"],
  },
  {
    className: "parallax-corner parallax-bottom-left",
    src: "/left-bottom.png",
    sizes: "(max-width: 768px) 78vw, 38vw",
    translateX: ["-24px", "24px"],
    translateY: ["34px", "-34px"],
  },
  {
    className: "parallax-corner parallax-bottom-right",
    src: "/right-bottom.png",
    sizes: "(max-width: 768px) 78vw, 38vw",
    translateX: ["24px", "-24px"],
    translateY: ["34px", "-34px"],
  },
];

export default function FlyerParallax({ children }) {
  return (
    <ParallaxProvider>
      <div className="flyer-shell">
        {corners.map((corner) => (
          <Parallax
            key={corner.className}
            className={corner.className}
            translateX={corner.translateX}
            translateY={corner.translateY}
            shouldAlwaysCompleteAnimation
          >
            <div className="parallax-image-wrap" aria-hidden="true">
              <Image
                src={corner.src}
                alt=""
                fill
                priority
                sizes={corner.sizes}
                className="object-contain"
              />
            </div>
          </Parallax>
        ))}

        {children}
      </div>
    </ParallaxProvider>
  );
}
