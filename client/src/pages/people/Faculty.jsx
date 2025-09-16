import React, { useState, useEffect } from "react";
import FacultyCardTemplate from "./FacultyCardTemplate";
import PageBanner from "../../components/PageBanner";
import HeroTemplate from "../about/HeroTemplate"

const Faculty = () => {
  
  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
  const [facultyData, setFacultyData] = useState([]);
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);

  // Fetch faculty from backend
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/faculty`);
        const data = await res.json();
        setFacultyData(data);
      } catch (error) {
      }
    };
    fetchFaculty();
  }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / People / Faculty" />
     <HeroTemplate stats={stats}/>

    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-30 bg-gray-50">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-3">Faculty Members</h2>
        <p className="text-gray-400 text-[17px]">
          (A great team of professional teachers and speakers)
        </p>
        <hr className="mt-5 border-gray-300 w-25" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {facultyData.map((faculty, index) => (
          <FacultyCardTemplate key={index} {...faculty} />
        ))}
      </div>
    </section>
    </>
  );
};

export default Faculty;
