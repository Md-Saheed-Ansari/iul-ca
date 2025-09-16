import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner";
import HeroTemplate from "../about/HeroTemplate"

const Visiting = () => {

  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 0, research: 43 });
            }, 1000);
          }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / People / Visiting" />
     <HeroTemplate stats={stats}/>

    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-30 bg-gray-50">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-3">Teaching Visiting Staff</h2>
        <hr className="mt-5 border-gray-300 w-25" />
      </div>

    </section>
    </>
  );
};

export default Visiting;
