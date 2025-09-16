import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import HeroTemplate from "../pages/about/HeroTemplate"

const infrastructureData = [
  { room: "CA-1", name: "Web Development Lab", area: "860 Sq.Ft.", capacity: "30 Students", configuration: "C2D/320 GB/18.5 TFT/ HP 3090 PC/Operating System-UBUNTU" },
  { room: "CA-2", name: "Project Lab", area: "860 Sq.Ft.", capacity: "30 Students", configuration: "C2D/320 GB/18.5 TFT/ HP 3090 PC/Operating System-UBUNTU" },
  { room: "CA-3", name: "Graphics & Multimedia Lab", area: "1020 Sq.Ft.", capacity: "30 Students", configuration: "I5/500GB/DVDRW/18.5 TFT/HP3330PC/Operating System-Windows 8" },
  { room: "CA-4", name: "Database Lab", area: "910 Sq.Ft.", capacity: "30 Students", configuration: "I5/500GB/DVDRW/18.5 TFT/HP3330PC/Operating System-Windows 8" },
  { room: "CA-5", name: "Open Source Lab", area: "890 Sq.Ft.", capacity: "30 Students", configuration: "I5/500GB/DVDRW/18.5 TFT/HP3330PC/Operating System-Windows 8" },
  { room: "CA-6", name: "Programming Lab", area: "1280 Sq.Ft.", capacity: "30 Students", configuration: "C2D/32GB/2GB/18.5 TFT/DVDRW/Operating System-UBUNTU" },
  { room: "CA-7", name: "Programming Lab", area: "1200 Sq.Ft.", capacity: "30 Students", configuration: "I5/500GB/DVDRW/18.5 TFT/HP3330PC/Operating System-Windows 8" },
  { room: "CA-8", name: "Programming Lab", area: "1350 Sq.Ft.", capacity: "30 Students", configuration: "I5/500GB/DVDRW/18.5 TFT/HP1191PC/Operating System-Windows 10" },
  { room: "Smart Class Room", name: "SEMINAR/PRESENTATION", area: "138.89 Sq.Ft.", capacity: "90 Students", configuration: "Projector, Computer System, UPS, Mike, Fan, AC, Chair, Table, Podium" },
];

const Infrastructure = () => {

    const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
        
             useEffect(() => {
                setTimeout(() => {
                  setStats({ programs: 3, teachers: 56, research: 43 });
                }, 1000);
              }, []);


  return (
    <>
    <PageBanner breadcrumb="Home / Infrastructure " />
     <HeroTemplate stats={stats}/>

    <div className="p-6 sm:px-10 md:px-20 lg:px-40 bg-gray-50 min-h-screen mt-20">
      <div className="bg-white shadow-xl hover:shadow-2xl rounded-lg p-6 sm:p-8">
        <h2 className="text-4xl font-stretch-50% text-gray-900 mb-8 text-center">Infrastructure</h2>

        {/* Large screen table */}
        <div className="hidden min-[860px]:block overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead>
              <tr className="bg-[#4f65be] text-white">
                <th className="border border-gray-300 px-3 py-4">ROOM</th>
                <th className="border border-gray-300 px-3 py-4">NAME</th>
                <th className="border border-gray-300 px-3 py-4">AREA</th>
                <th className="border border-gray-300 px-3 py-4">CAPACITY</th>
                <th className="border border-gray-300 px-3 py-4">CONFIGURATION</th>
              </tr>
            </thead>
            <tbody>
              {infrastructureData.map((item, index) => (
                <tr key={index} className="odd:bg-gray-100 even:bg-white align-top">
                  <td className="border border-gray-300 px-4 py-5">{item.room}</td>
                  <td className="border border-gray-300 px-4 py-5">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-5">{item.area}</td>
                  <td className="border border-gray-300 px-4 py-5">{item.capacity}</td>
                  <td className="border border-gray-300 px-4 py-5">{item.configuration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small screen cards */}
        <div className="min-[860px]:hidden space-y-4">
          {infrastructureData.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm text-[14px]">
              <div className="flex justify-between py-2">
                <span className="font-semibold">ROOM:</span>
                <span>{item.room}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between py-2">
                <span className="font-semibold">NAME:</span>
                <span>{item.name}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between py-2">
                <span className="font-semibold">AREA:</span>
                <span>{item.area}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between py-2">
                <span className="font-semibold">CAPACITY:</span>
                <span>{item.capacity}</span>
              </div>
              <hr className="border-gray-300" />
              <div className="py-2">
                <span className="font-semibold">CONFIGURATION:</span>
                <p className="mt-1 whitespace-pre-line">{item.configuration}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </>
  );
};

export default Infrastructure;
