"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Button = ({ type, text, className, link }) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const handleRedirect = () => {
    router.push(link);
  };

  if (type === "solid") {
    return (
      <button
        className={`relative bg-sf-lime text-sf-dblue flex justify-center items-center rounded-3xl hover:shadow-xl hover:shadow-sf-lime/30 transition-all duration-500 w-64 h-[74px] mt-8 lg:mt-12 ${
          className || ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={link ? handleRedirect : () => {}}
      >
        <p className="text-2xl font-bold">{text}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 8"
          fill="none"
          className={`size-6 ${
            hover ? "ml-8" : "ml-3"
          } transition-all delay-150 origin-center duration-200 ease-in-out`}
        >
          <path
            d="M5.46967 0.46967C5.76256 0.176777 6.23744 0.176777 6.53033 0.46967L9.53033 3.46967C9.82322 3.76256 9.82322 4.23744 9.53033 4.53033L6.53033 7.53033C6.23744 7.82322 5.76256 7.82322 5.46967 7.53033C5.17678 7.23744 5.17678 6.76256 5.46967 6.46967L7.18934 4.75H1C0.585786 4.75 0.25 4.41421 0.25 4C0.25 3.58579 0.585786 3.25 1 3.25H7.18934L5.46967 1.53033C5.17678 1.23744 5.17678 0.762563 5.46967 0.46967Z"
            fill="#062841"
          />
        </svg>
      </button>
    );
  } else if (type === "outline") {
    return (
      <button
        onClick={link ? handleRedirect : () => {}}
        className={`min-w-56 px-6 h-14 rounded-[20px] text-sf-lime border-2 border-sf-lime hover:bg-sf-lime hover:text-sf-dblue transition-colors text-xl font-semibold ${
          className || ""
        }`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
