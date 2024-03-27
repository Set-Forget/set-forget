"use client"
import React, { useRef, useEffect } from "react";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import sf from "../../images/logos/sf.svg";

const Carousels = ({ type }) => {
  const work = Array(10).fill("Our Work");
  const talk = Array(10).fill("Let's talk");
  const scopeRef = useRef(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;
    const spanTag = scopeRef.current.querySelector("span");
    const spanWidth = spanTag.offsetWidth * 7;

    const handleAnim = async () => {
      while (isMounted) {
        await animate(
          scopeRef.current,
          { x: (spanWidth * -1) / 2 },
          { duration: 8, ease: "linear" }
        );
        if (!isMounted) break;
        await animate(scopeRef.current, { x: -4 }, { duration: 0 });
      }
    };
    handleAnim();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`flex items-center lg:h-52 bg-${type === "work" ? "sf-lime" : "sf-beige"} text-sf-dblue hover:${type === "work" ? "text-sf-white" : "bg-sf-green hover:text-sf-beige"} transition-colors duration-700 text-heading lg:text-[5rem] bold-neue overflow-hidden cursor-default`}>
      <div ref={scopeRef} className="flex items-center w-[2716px]">
        {type === "work" ? work.map((word, index) => (
          <div key={index} className="inline-block flex-shrink-0">
            <span className="flex space-x-2 justify-center items-center">
              {word} <Image src={sf} width={56} height={56}  className="mt-3"/>
            </span>
          </div>
        )) : talk.map((word, index) => (
          <div key={index} className="inline-block flex-shrink-0">
            <span className="flex space-x-2 justify-center items-center">
              {word} <Image src={sf} width={56} height={56} className="mt-3" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousels;
