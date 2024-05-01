import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const YourComponent = ({ ImagePath, NameCharacter }) => {
  const containerRef = useRef(null);
  const NameRef =useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const Name = NameRef.current;

    const tl = gsap.timeline({ paused: true });

    // Animation timeline
    tl.to(container, { scale: 1.01, duration: 0.2 });
    tl.to(Name ,{x:110 ,duration:0.5,  ease:'power1.inout' })

    // Hover effect
    container.addEventListener('mouseenter', () => tl.play());
    container.addEventListener('mouseleave', () => tl.reverse());

    return () => {
      // Cleanup event listeners
      container.removeEventListener('mouseenter', () => tl.play());
      container.removeEventListener('mouseleave', () => tl.reverse());
    };
  }, []);
  

  return (
    <div
      ref={containerRef}
      className='mt-4 ml-6 w-[450px] h-[250px] bg-cover flex flex-col-reverse'
      style={{ backgroundImage: `url(${ImagePath})` }}
    >
      <p className='z-10 text-white font-Emizen ml-10 text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]' ref={NameRef}>{NameCharacter}</p>
    </div>
  );
};

export default YourComponent;
