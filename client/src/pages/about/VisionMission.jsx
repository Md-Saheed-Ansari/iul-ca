import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner";
import DepartmentInfo from "../../components/DepartmentInfo";
import HeroTemplate from "./HeroTemplate"

const VisionMission = () => {

  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / About / Vision & Mission" />
    <HeroTemplate stats={stats}/>
    <div className="w-full bg-gray-100">
    <div className="text-gray-800 max-w-5xl mx-auto px-6 sm:px-6 lg:px-12 py-25">
      {/* Vision Section */}
      <div className="mb-12">
        <h2 className="text-[31px] font-stretch-50% mb-1">Vision</h2>
        <p className="text-[17px] text-gray-400 leading-relaxed mb-4">
          The Vision of the Department is :
        </p>
        <div className="w-24 h-[1px] bg-gray-300 mb-4"></div>
        <p className="mt-7 text-[16px] leading-relaxed">
          To be a premier academic department recognized globally for
          excellence in Technical Education, innovation, and research.
        </p>
         <div className="w-220 h-[1px] bg-gray-300 mt-5"></div>
      </div>

      {/* Mission Section */}
      <div className="-mt-7">
        <h2 className="text-[31px] font-stretch-50% mb-1">Mission</h2>
        <p className="text-[17px] text-gray-400 leading-relaxed mb-4">
          The Mission of the Department is :
        </p>
        <div className="w-24 h-[1px] bg-gray-300 mb-4"></div>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[16px] leading-relaxed">
          <li>
            To produce technocrats who are well-rounded, equipped with the
            technical expertise and leadership skills to contribute meaningfully
            to society.
          </li>
          <div className="w-233 h-[1px] bg-gray-300 mt-5"></div>
          <li>
            To inculcate research culture in computer applications and
            collaboration with industry partners to address real-world
            challenges and drive technological innovation forward.
          </li>
          <div className="w-233 h-[1px] bg-gray-300 mt-5"></div>
        </ul>
      </div>
    </div>
    </div>
    <DepartmentInfo/>
    </>
  );
};

export default VisionMission;
