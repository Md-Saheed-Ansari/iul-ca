import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/iul5.png"; // replace with your image

const RegisterSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-sm shadow-xl w-[450px] h-[170px] max-[490px]:w-[300px]
       max-[490px]:h-[140px] max-[490px]:mx-6 text-center">
        {/* Heading */}
        <div className="bg-[#4f65be] text-white py-4 rounded-t-sm">
          <h2 className="text-xl md:text-2xl max-[490px]:text-[15px] font-bold uppercase">
            Register Your Interest
          </h2>
        </div>

        {/* Button */}
        <div className="p-6 mt-2max-[490px]:mt-1">
          <button
            onClick={() => navigate("/form")}
            className="w-full max-[490px]:w-[220px] max-[490px]:text-[10px] bg-[#4f65be] hover:bg-black
             cursor-pointer uppercase text-white text-[13px] py-3
             rounded-md transition duration-300"
          >
            Get In Touch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
