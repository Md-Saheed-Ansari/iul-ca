import React from "react";
import bannerImg from "../assets/iul3.jpeg"; // make sure path is correct
import { motion } from "framer-motion";

const PageBanner = ({ breadcrumb }) => {
  return (
    <div className="relative h-[375px] w-full max-[768px]:h-[150px] flex items-center justify-start overflow-hidden">
      {/* Background Image with brightness filter */}
      <img
        src={bannerImg}
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
      />

      {/* Breadcrumb Text */}
      <motion.div
         initial={{ y: 50, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}   
         className="relative z-10 -mt-47 px-52 max-[768px]:absolute max-[768px]:bottom-5 max-[768px]:left-5 max-[768px]:px-0 max-[768px]:mt-0">
        <h1 className="text-[#fff] text-2xl max-[340px]:text-[17px] font-stretch-50%">{breadcrumb}</h1>
      </motion.div>
    </div>
  )
};

export default PageBanner;
