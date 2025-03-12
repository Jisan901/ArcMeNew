import { useEffect, useRef, useState } from "react";
import { Block } from "../temp/Block";
import { CardServices } from "./CardServices";

export const Services = () => {
  const triggerer = useRef<HTMLDivElement>(null);
  const effect = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(10); // Initial font size in rem

  useEffect(() => {
    const handleScroll = () => {
      if (!triggerer.current || !effect.current) return;

      const triggererTop = triggerer.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Calculate the percentage of scroll past the triggerer
      const progress = Math.min(Math.max(1 - triggererTop / windowHeight, 0), 1);

      // Reduce font size based on scroll progress
      const newFontSize = 10 - progress * 5; // Reduce up to 5rem
      setFontSize(newFontSize);

      console.log(newFontSize, progress)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Block width="100%" height="700vh" color="var(--dark-color)" className="relative">
      <div 
        ref={effect} 
        className="h-[100vh] w-full bg-[var(--dark-color)] sticky top-0 flex justify-center items-center transition-all duration-300"
        style={{ fontSize: `${fontSize}rem` }}
      >
        {"{hello}"}
      </div>
      <div className="h-full w-full z-[4] absolute flex items-end flex-col">
        <Block height="100vh" width="80%" color="transparent" className="mx-auto flex justify-center items-center"><span></span></Block>
        <Block height="100vh" width="80%" color="transparent" className="mx-auto flex justify-center items-center"><CardServices/></Block>
        <Block height="100vh" width="80%" color="transparent" className="mx-auto flex justify-start items-center"><CardServices/></Block>
        <Block height="100vh" width="80%" color="transparent" className="mx-auto flex justify-center items-center"><CardServices/></Block>
        <Block ref={triggerer} height="100vh" width="80%" color="transparent" className="mx-auto flex justify-end items-center"><CardServices/></Block>
        <Block height="100vh" width="80%" color="transparent" className="mx-auto flex justify-center items-center"><CardServices/></Block>
      </div>
    </Block>
  );
};
