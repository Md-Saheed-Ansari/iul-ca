import React, { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";   // ✅ Import NavLink
import slide1 from "../assets/iul.jpeg";
import slide2 from "../assets/iul3.jpeg";
import slide3 from "../assets/iul2.jpg";
import slide4 from "../assets/iul4.jpeg";

const HeroSection = () => {
  const slides = [
    { image: slide1, heading: "CREATIVITY & INNOVATION" },
    { image: slide2, heading: "EDUCATION & INFRASTRUCTURE" },
    { image: slide3, heading: "KNOWLEDGE & DETERMINATION" },
    { image: slide4, heading: "MOTIVATION & LEADERSHIP" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });

  // Mock API call
  useEffect(() => {
    setTimeout(() => {
      setStats({ programs: 3, teachers: 56, research: 43 });
    }, 1000);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
  }, [currentIndex, resetTimer]);

  return (
    <div className="relative w-full h-[480px] overflow-hidden max-[820px]:h-100 max-[820px]:-mb-10 max-[480px]:h-60 max-[480px]:-mb-20">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${currentIndex}`}
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Heading */}
      <div className="relative z-10 flex h-full min-[821px]:-top-20">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`h-${currentIndex}`}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, ease: "easeInOut" }}
             className="
                     text-5xl max-[480px]:text-2xl max-[821px]:text-4xl font-bold text-white
                     flex items-center 
                     min-[821px]:static min-[821px]:pl-42  /* large: normal position */
                     max-[820px]:absolute max-[820px]:left-8 max-[820px]:bottom-8  /* small: bottom-left */"
          >
            {slides[currentIndex].heading.includes("&") ? (
              <>
                {slides[currentIndex].heading.split("&")[0]} & <br />
                {slides[currentIndex].heading.split("&")[1]}
              </>
            ) : (
              slides[currentIndex].heading
            )}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Stats Section with NavLink */}
      <div className="relative z-10 hidden min-[820px]:flex min-[820px]:-top-50 w-full justify-center gap-6 px-10 bottom-10">
        
        {/* Programs */}
        <NavLink to="/program" className="flex-1 max-w-xs" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-72
           [@media(max-width:1000px)]:h-34 [@media(max-width:1000px)]:w-62 flex cursor-pointer group
          transition-all duration-300">
            <div className="w-1/2 flex items-center justify-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#4f65be] group-hover:text-black transition-colors duration-300"
              >
                {stats.programs}
              </motion.h2>
            </div>
            <div className="w-1/2 flex flex-col justify-center text-left">
              <p className="text-[#4f65be] uppercase font-semibold">Programs</p>
              <p className="text-sm text-gray-500">
                We currently offer professional courses.
              </p>
            </div>
          </div>
        </NavLink>

        {/* Teachers */}
        <NavLink to="/people/faculty" className="flex-1 max-w-xs" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-72 flex cursor-pointer group 
                  [@media(max-width:1000px)]:h-34 [@media(max-width:1000px)]:w-62 transition-all duration-300">
            <div className="w-1/2 flex items-center justify-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#4f65be] group-hover:text-black transition-colors duration-300"
              >
                {stats.teachers}
              </motion.h2>
            </div>
            <div className="w-1/2 flex flex-col justify-center text-left">
              <p className="text-[#4f65be] uppercase font-semibold">Teachers</p>
              <p className="text-sm text-gray-500">
                We have professional teachers teaching.
              </p>
            </div>
          </div>
        </NavLink>

        {/* Research */}
        <NavLink to="/research" className="flex-1 max-w-xs" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-white shadow-lg hover:shadow-4xl rounded-[6px] p-4 h-36 w-72 flex cursor-pointer group 
                         [@media(max-width:1000px)]:h-34 [@media(max-width:1000px)]:w-62 transition-all duration-300">
            <div className="w-1/2 flex items-center justify-center">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#4f65be] group-hover:text-black transition-colors duration-300"
              >
                {stats.research}
              </motion.h2>
            </div>
            <div className="w-1/2 flex flex-col justify-center text-left">
              <p className="text-[#4f65be] uppercase font-semibold">Research</p>
              <p className="text-sm text-gray-500">
                Currently {stats.research} research students in department.
              </p>
            </div>
          </div>
        </NavLink>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          prevSlide();
          resetTimer();
        }}
        className="absolute z-20 top-4/12 left-0 -translate-y-1/2 max-[820px]:hidden
                   bg-black/30 hover:bg-black/60 p-6 cursor-pointer 
                   shadow-lg hover:pr-9 transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="w-6 h-6 text-white/70" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          resetTimer();
        }}
        className="absolute z-20 top-4/12 right-0 -translate-y-1/2 max-[820px]:hidden 
                   bg-black/30 hover:bg-black/60 p-6 cursor-pointer 
                   shadow-lg hover:pl-9 transition-all duration-300 ease-in-out"
      >
        <ChevronRight className="w-6 h-6 text-white/70" />
      </button>
    </div>
  );
};

export default HeroSection;
