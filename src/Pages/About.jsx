import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const paraRef = useRef(null);

  useGSAP(() => {
    const chars = paraRef.current.querySelectorAll("span");

    gsap.from(chars, {
      stagger: 0.05, // controls speed of reveal
      color: "#57534D",
      scrollTrigger: {
        trigger: paraRef.current,
        scroller: "body",
        start: "top top", // adjust to when you want it to start end: "top -100%", scrub: true, markers: true,
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  const text =
    "Brkthru isn’t for those who settle. It’s for the ones who crave something bigger, who refuse to be just another face in the crowd.";

  return (
    <div ref={paraRef} className="h-screen  text-white p-20 flex flex-col justify-center items-center aboutBg z-99">
       
      <h1 className="text-3xl font-semibol font-[W1">ABOUT</h1>
      {/* the pinned section */}
      <p
        className="sm:text-5xl mt-4 font-semibold uppercase text-white  w-[44%] leading-tight text-center flex flex-wrap justify-center items-center"
      > 
        {text.split("").map((char, index) => (
          <span key={index}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </p>
    </div>
  );
};

export default About;
