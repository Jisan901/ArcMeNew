import { useEffect, useRef, useState } from "react";
import { Block } from "../temp/Block";
import "./Hero.css";
import { Pointer } from "./Pointer";
import { Vision } from "./Vision";
import { About } from "./About";
import { Services } from "./Services";
import { ServicesCards } from "./ServicesCards";

import card1 from "/src/assets/card1.png";
import card2 from "/src/assets/card2.png";
import card3 from "/src/assets/card3.png";
import card4 from "/src/assets/card4.jpg";
import card5 from "/src/assets/card5.jpg";
import card6 from "/src/assets/card6.jpg";


export const Hero = () => {
  const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
  const blks = document.getElementsByClassName('tilt-block') as HTMLCollectionOf<HTMLDivElement>;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prevMousePos, setPrevMousePos] = useState({ x: 0, y: 0 }); // Store previous position

  const onMove = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const requestRef = useRef<number | null>(null);

  const animate = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Smoothly interpolate the movement
    const smoothX = lerp(prevMousePos.x, mousePos.x, 0.1);
    const smoothY = lerp(prevMousePos.y, mousePos.y, 0.1);

    setPrevMousePos({ x: smoothX, y: smoothY });

    // Normalized coordinates between [-1, 1]
    const normalizedX = (smoothX / width) * 2 - 1;
    const normalizedY = (smoothY / height) * 2 - 1;

    const direction = { x: normalizedX * -1, y: normalizedY * -1 };
    const MOVE_FACTOR = 10;

    for (let i = 0; i < blks.length; i++) {
      const blk = blks[i];
      const x = blk.getAttribute("data-basex") ?? "0";
      const y = blk.getAttribute("data-basey") ?? "0";
      const layer = blk.getAttribute("data-layer") ?? "1";

      if (blk) {
        const targetX = (direction.x * MOVE_FACTOR * +layer);
        const targetY = (direction.y * MOVE_FACTOR * +layer);

        // Apply lerp for smooth transition
        const currentTransform = blk.style.translate.split(" ");
        const currentX = parseFloat(currentTransform[0]) || 0;
        const currentY = parseFloat(currentTransform[1]) || 0;

        const newX = lerp(currentX, targetX, 0.1);
        const newY = lerp(currentY, targetY, 0.1);

        blk.style.translate = `${newX}px ${newY}px`;

        const dist = Math.sqrt((+x - smoothX) ** 2 + (+y - smoothY) ** 2);
        blk.style.filter = `blur(${2 * (dist / (width / 2))}px) grayscale(100%)`;
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current ?? 0);
  }, [mousePos]);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);

    for (let i = 0; i < blks.length; i++) {
      const blk = blks[i];
      blk.setAttribute("data-basex", blk.offsetLeft + "");
      blk.setAttribute("data-basey", blk.offsetTop + "");
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div>
      <Pointer x={mousePos.x} y={mousePos.y}/>
      <Block width="100%" height="100vh" color="var(--dark-color)" className="relative overflow-hidden">
      <div data-layer="1" className="h-48 w-48 absolute top-5 left-1/2 tilt-block">
        <img src={card1} className="h-full w-full" />
      </div>
      <div data-layer="1" className="h-48 w-48 absolute bottom-24 right-24 tilt-block">
        <img src={card2} className="h-full w-full" />
      </div>
      <div data-layer="1" className="h-32 w-32 absolute bottom-24 left-24 tilt-block">
        <img src={card3} className="h-full w-full" />
      </div>
      <div data-layer="4" className="h-48 w-48 absolute top-24 left-24 tilt-block">
        <img src={card4} className="h-full w-full" />
      </div>
      <div data-layer="4" className="h-40 w-48 absolute top-24 right-24 tilt-block">
        <img src={card5} className="h-full w-full" />
      </div>
      <div data-layer="4" className="h-48 w-48 absolute bottom-2.5 left-[40%] tilt-block">
        <img src={card6} className="h-full w-full" />
      </div>
        <div className="text-container-center ">
          <div className="text">
            <span className="font-extrabold text-7xl textbg hover-pointer-scale">ARCH.ME</span>
          </div>
        </div>
      </Block>
      <Vision/>
      <About/>
      <ServicesCards/>
      <Services/>

      <Block width="100%" height="300vh" color="var(--dark-color)" className="relative"></Block>
    </div>
  );
};
