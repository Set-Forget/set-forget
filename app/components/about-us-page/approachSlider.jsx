"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import drawnArrow from "../../../public/drawn-arrow.svg";
import team02 from "../../images/team/team02.png";
import { useAnimate, cubicBezier } from "framer-motion";

const ApproachSlider = () => {
  const containerRef = useRef(null);
  const [scopeVert, animateVert] = useAnimate();
  const totalSlides = 5;
  const slideHeight = 527;

  const slides = [
    {
      num: "↓",
      p: "",
    },
    {
      num: "01",
      p: "When you hire Set & Forget, we feel honored for becoming a part of your organization!",
    },
    {
      num: "02",
      p: "We will listen to what you have to say and understand your points.",
    },
    {
      num: "03",
      p: "Agnostically propose the best possible solutions to them.",
    },
    {
      num: "04",
      p: "Work to the very best of our abilities to ensure a flawless delivery.",
    },
  ];

  useEffect(() => {
    const cancelAnimation = { cancelled: false };

    const handleScroll = () => {
      const containerHeight =
        window.innerWidth >= 1440
          ? window.innerHeight * 4
          : window.innerHeight * 8;

      const scrollY = window.scrollY;
      const scrollPortion = containerHeight / totalSlides;

      const currentSlideIndex = Math.min(
        totalSlides - 1,
        Math.floor(scrollY / scrollPortion)
      );

      const newY = -currentSlideIndex * slideHeight;

      if (!cancelAnimation.cancelled) {
        animateVert(
          scopeVert.current,
          { y: newY },
          {
            duration: 0.5,
            ease: cubicBezier(0.86, 0, 0.07, 1),
          }
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimation.cancelled = true;
    };
  }, [animateVert]);

  return (
    <div
      ref={containerRef}
      className="col-span-12 flex flex-col gap-5 sticky top-0"
    >
      <div className="mt-8 2xl:mt-20 mb-8 flex items-center col-span-2 space-x-8">
        <Image src={drawnArrow} />
        <h2 className="text-heading bold-neue leading-none mb-3">
          Our approach
        </h2>
        {/* <Link href="#" className="text-2xl text-sf-lime">
          Learn more
        </Link> */}
      </div>
      <div className="flex flex-row justify-between gap-5">
        <Image
          src={team02}
          className="rounded-[68px] h-[527px] w-1/2 2xl:max-w-full max-w-[550px] object-cover"
        />
        <div className="relative h-[527px] rounded-[68px] w-1/2 2xl:max-w-full max-w-[550px]">
          <div className="absolute inset-0 bg-[#272727] rounded-[68px] flex flex-col justify-start items-center overflow-hidden">
            <div ref={scopeVert} className="h-[2108px] flex flex-col">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="min-h-[527px] flex justify-center items-center"
                >
                  <span className="font-bold text-[4rem]">{slide.num}</span>
                  <p className="w-96 text-xl ml-3">{slide.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSlider;

// useEffect(() => {
//   let isMounted = true;
//   const handleVerticalAnim = async () => {
//     while (isMounted) {
//       await animateVert(
//         scopeVert.current,
//         { y: -527 },
//         { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
//       );
//       if (!isMounted) break;
//       await animateVert(
//         scopeVert.current,
//         { y: -1054 },
//         { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
//       );
//       if (!isMounted) break;
//       await animateVert(
//         scopeVert.current,
//         { y: -1581 },
//         { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
//       );
//       if (!isMounted) break;
//       await animateVert(
//         scopeVert.current,
//         { y: -2108 },
//         { duration: 0.5, ease: cubicBezier(0.86, 0, 0.07, 1), delay: 2.6 }
//       );
//       if (!isMounted) break;
//       await animateVert(scopeVert.current, { y: 0 }, { duration: 0 });
//       if (!isMounted) break;
//       handleVerticalAnim();
//     }
//   };
//   handleVerticalAnim();
//   return () => {
//     isMounted = false;
//   };
// }, []);
