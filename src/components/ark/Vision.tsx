import { useEffect, useRef, useState } from "react";

export const Vision = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(isVisible)
          if(sectionRef2.current) sectionRef2.current.style.display = "block"
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);


    return (
        <>
            <div ref={sectionRef} className="relative overflow-hidden grid place-items-center w-full h-screen bg-[var(--dark-color)]">
                <div className='w-[90%] hidden' ref={sectionRef2}>
                    <h3 className="text-1xl mb-6">{"{vision}"}</h3>
                    <div className="text-container ">
                        <div className="text">
                            <span className="text-5xl hover-pointer-scale block text-gray-400">Einfach nur eine weitere Marketing Agentur?</span>
                        </div>
                    </div>            
                    <div className="text-container ">
                        <div className="text">
                            <span className="text-5xl hover-pointer-scale block text-gray-400" style={{
                                animationDelay:"0.5s"
                            }}>Nein! Wir sind die <i className='italic text-white'>Architekten</i> deiner digitalen Präsenz.</span>
                        </div>
                    </div>            
                    <div className="text-container ">
                        <div className="text">
                            <span className="text-5xl hover-pointer-scale block text-gray-400" style={{
                                animationDelay:"0.6s"
                            }}>Unsere Mission? Deine Marke mit einzigartigem Design </span>
                        </div>
                    </div>            
                    <div className="text-container ">
                        <div className="text">
                            <span className="text-5xl hover-pointer-scale block text-gray-400" style={{
                                animationDelay:"0.7s"
                            }}>und <i className='italic text-white'>unübertroffener Expertise</i> sichtbar zu machen.</span>
                        </div>
                    </div>            
                </div>
            </div>
        </>
    )
}
