import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner";
import HeroTemplate from "./HeroTemplate"
import DepartmentInfo from "../../components/DepartmentInfo";

export default function COsCOPOMapping() {

    const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
         
              useEffect(() => {
                 setTimeout(() => {
                   setStats({ programs: 3, teachers: 56, research: 43 });
                 }, 1000);
               }, []);

 return (
    <>
    <PageBanner breadcrumb="Home / About / CO" />
    <HeroTemplate stats={stats}/>

     <div className="w-full bg-white pt-14 px-4 sm:px-6 lg:px-12">
         <h1 className="text-[22px] font-bold mt-10 justify-center text-center text-black/80 underline mb-8">
          CO's & CO-PO Mapping of Computer Application Programs
          </h1>
       
        {/* Links always stacked vertically */}
        <div className="flex flex-col space-y-6 pl-4 sm:pl-12 lg:pl-17">
          <a
            href="https://www.iul.ac.in/ca/PDF/BCA_PEO_PO_PSO_CO_PO_Mapping.pdf?v=2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f65be] font-bold text-[17px] hover:text-black hover:underline"
          >
            Bachelor of Computer Application
          </a>
          <a
            href="https://www.iul.ac.in/ca/PDF/MCA(New)_PEO_PO_PSO_CO_PO_Mapping.pdf?v=2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4f65be] font-bold text-[17px] hover:text-black hover:underline"
          >
            Master of Computer Application
          </a>
        </div>
      </div>

       <DepartmentInfo/>
 </>
 )
}