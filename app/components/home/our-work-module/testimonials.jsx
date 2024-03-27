"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import quotes from "../../../../public/quotes.svg";

// Define your testimonials
const testimonials = [
  {
    id: 1,
    portrait:
      "https://www.gmass.co/gmailgenius/wp-content/uploads/2020/01/Ben-Collins.jpg",
    name: "Ben Collins",
    text: "I'm delighted to partner with Set & Forget and recommend them as my preferred consulting partner. Their work and approach is top quality and they are always professional and courteous to deal with.",
  },
  {
    id: 2,
    portrait:
      "https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2Fresized-avatar%2F8dfae044-0022-476f-a234-6cc31798c228%2Favatar-resized?alt=media&token=72cf637f-b632-45f3-ae39-070af0286de8",
    name: "Mike F",
    text: "I worked with the Set and Forget team, and I highly recommend them. We did a couple of financial modeling workflow automations, and at every step of the way the entire team were quick to respond to my emails, always happy to jump on a call to explain things or answer questions, and most importantly -- did great work! While I contracted them for just a one-time project, I was so happy with their work and their communication that I will continue to work with them going forward. Really happy with everything -- strongly recommend them for your next Google Sheets project.",
  },
  {
    id: 3,
    portrait:
      "https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/testimonials%2F437dd49f-8fa3-4485-b6a1-8bfab80e3284%2Favatar?alt=media&token=315cb096-d29b-4851-913a-ddd09c3d1921",
    name: "Claire Oliver",
    text: "Amazing! I had a problem I wanted to solve that was way beyond my skill set and in very little time the Set & Forget team had it all figured out. So appreciative of the help, and hours of work that was saved!",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const nextIndex =
          (testimonials.findIndex((t) => t.id === prev.id) + 1) %
          testimonials.length;
        return testimonials[nextIndex];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[713px] min-h-56 mb-16 flex flex-col justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col"
        >
          <div className="flex justify-start items-center gap-2 object-cover  mb-4">
            <img src={currentTestimonial.portrait} className="rounded-full size-12"/>
            <h3 className="text-2xl font-semibold">
              {currentTestimonial.name}
            </h3>
          </div>
          <p className="2xl:text-2xl text-xl text-pretty">
            {currentTestimonial.text}
          </p>
          <Image
            src={quotes}
            className="absolute -top-8 -left-16"
            alt="quote"
          />
          <Image
            src={quotes}
            className="absolute -bottom-8 -right-16 rotate-180"
            alt="quote"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
