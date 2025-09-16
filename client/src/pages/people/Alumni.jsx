import React, { useState, useEffect } from "react";
import AlumniCardTemplate from "./AlumniCardTemplate";
import PageBanner from "../../components/PageBanner";
import HeroTemplate from "../about/HeroTemplate"

const Alumni = () => {

  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
   const [alumniData, setAlumniData] = useState([]);
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);

           // Fetch faculty from backend
            useEffect(() => {
              const fetchAlumni = async () => {
                try {
                  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/alumni`);
                  const data = await res.json();
                  setAlumniData(data);
                } catch (error) {
                }
              };
              fetchAlumni();
            }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / People / Alumni" />
     <HeroTemplate stats={stats}/>

    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-30 bg-gray-50">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-4">Distinguished Alumni</h2>
        <ul className="list-disc text-gray-300 list-inside mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
            <a href="https://www.iul.ac.in/ca/pdf/ALMANAC_Volume_I.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#4f65be] hover:text-black hover:underline">
                ALMANAC Volume I
            </a>
          </li>
          <li>
            <a href="https://www.iul.ac.in/ca/pdf/ALMANAC_Volume_II.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#4f65be] hover:text-black hover:underline">
                ALMANAC Volume II
            </a>
          </li>
          <li>
            <a href="https://www.iul.ac.in/ca/pdf/FirstAlumniMeetReport.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#4f65be] hover:text-black hover:underline">
                First Alumni Meet
            </a>
          </li>
          </ul>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {alumniData.map((alumni, index) => (
          <AlumniCardTemplate key={index} {...alumni} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Alumni;
