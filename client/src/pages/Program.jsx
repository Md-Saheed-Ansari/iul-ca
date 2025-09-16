import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner"
import HeroTemplate from "./about/HeroTemplate"
import { Clock9 } from "lucide-react";
import Img1 from "../assets/h1.jpg"
import Img2 from "../assets/h2.jpg"
import Img3 from "../assets/h3.jpg"

const Program = () => {

   const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / Program" />
    <HeroTemplate stats={stats}/>

    <div className="w-full px-4 sm:px-6 lg:px-30 py-20">
      {/* Heading */}
      <h2 className="text-[30px] font-stretch-50% text-gray-800 mb-5 sm:text-left">Program Offered</h2>
      <div className="w-26 h-[1px] bg-gray-300 mb-10"></div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="bg-white shadow-xl rounded-sm hover:shadow-2xl overflow-hidden flex flex-col">
          {/* Image Area */}
          <div className="relative">
            <a href="https://admission.iul.ac.in/"
            target="_blank" 
            rel="noopener noreferrer" 
             className="relative-block">
            <img
              src={Img1}
              alt="Program"
              className="w-full h-33 object-cover max-[330px]:h-40"
            />
            <span className="absolute top-5 right-0 bg-red-500 text-white px-5 py-1 max-[380px]:px-2 max-[380px]:text-[14px]
             text-[18px] font-stretch-50% rounded">
                 APPLY NOW
            </span>
            </a>
            <h3 className="absolute bottom-3 left-3 text-white font-bold text-2xl drop-shadow-md">
              Bachelor of Computer Application
            </h3>
          </div>

          {/* Content Area with Padding */}
          <div className="p-12 text-gray-700 text-sm max-[380px]:p-6">
            <div className="flex items-center gap-2">
               <Clock9 className="w-4 h-4 text-gray-700" strokeWidth={2} />
               <p className="text-[#4f65be] font-semibold mb-1">Duration : 3 Yr.</p>
               </div>
             <hr className="my-4 border-t-1 border-gray-400" />
            <a href="/program" className="text-[#4f65be] cursor-pointer hover:text-black font-stretch-50% text-[18px] mb-2 -mt-1">
              Bachelor of Computer Application
            </a>
            <p className="mb-10 mt-2">
              <span className="font-bold">Eligibility</span> - 10+2, 45%, Any
              Subjects
            </p>

            <hr className="my-4 border-t-1 border-gray-400" />
            <p className="font-bold mb-2">Program Coordinator</p>

            {/* Table Style */}
            <div className="w-full">
            <table className="w-full border text-sm bg-gray-100 border-gray-400 table-auto max-[280px]:hidden">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2 w-2/4">Name</td>
                  <td className="px-2 py-2">Dr. Mohd Faizan</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2">Email</td>
                  <td className="px-2 py-2">mdfaizan@iul.ac.in</td>
                </tr>
              </tbody>
            </table>

             {/* Mobile view stacked layout */}
            <div className="gap-3 max-[280px]:block hidden">
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                 <p className="font-bold">Name</p>
                 <p>Dr. Mohd Faizan</p>
             </div>
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                <p className="font-bold">Email</p>
               <p>mdfaizan@iul.ac.in</p>
              </div>
            </div>
           </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-sm hover:shadow-2xl overflow-hidden flex flex-col">
          {/* Image Area */}
          <div className="relative">
            <a href="https://admission.iul.ac.in/"
            target="_blank" 
            rel="noopener noreferrer" 
             className="relative-block">
            <img
              src={Img2}
              alt="Program"
              className="w-full h-33 object-cover max-[330px]:h-40"
            />
            <span className="absolute top-5 right-0 bg-red-500 text-white px-5 py-1 max-[380px]:px-2 max-[380px]:text-[14px]
             text-[18px] font-stretch-50% rounded">
                 APPLY NOW
            </span>
            </a>
            <h3 className="absolute bottom-3 left-3 text-white font-bold text-2xl drop-shadow-md">
              Master of Computer Application
            </h3>
          </div>

          {/* Content Area */}
          <div className="p-12 text-gray-700 text-sm max-[380px]:p-6">
            <div className="flex items-center gap-2">
            <Clock9 className="w-4 h-4 text-gray-700" strokeWidth={2} />
            <p className="text-[#4f65be] font-semibold mb-1">Duration : 2 Yr.</p>
            </div>
             <hr className="my-4 border-t-1 border-gray-400" />
            <a href="/program" className="text-[#4f65be] cursor-pointer hover:text-black font-stretch-50% text-[18px] mb-2 -mt-1">
              Master of Computer Application
            </a>
            <p className="mb-5 mt-2">
              <span className="font-bold">Eligibility</span> - Graduation, 50%,
              Mathematics, at 10+2 level or at Graduate Level
            </p>

            <hr className="my-4 border-t-1 border-gray-400" />
            <p className="font-bold mb-2">Program Coordinator</p>

             <div className="w-full">
            <table className="w-full border text-sm bg-gray-100 border-gray-400 table-auto max-[280px]:hidden">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2 w-2/4">Name</td>
                  <td className="px-2 py-2">Dr. Tasneem Ahmed</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2">Email</td>
                  <td className="px-2 py-2">tasneema@iul.ac.in</td>
                </tr>
              </tbody>
            </table>
            {/* Mobile view stacked layout */}
            <div className="gap-3 max-[280px]:block hidden">
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                 <p className="font-bold">Name</p>
                 <p>Dr. Mohd Faizan</p>
             </div>
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                <p className="font-bold">Email</p>
               <p>mdfaizan@iul.ac.in</p>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Card 3 (Below First) */}
        <div className="bg-white shadow-lg rounded-sm hover:shadow-2xl overflow-hidden flex flex-col md:col-start-1 md:row-start-2">
          {/* Image Area */}
          <div className="relative">
            <a href="https://admission.iul.ac.in/"
            target="_blank" 
            rel="noopener noreferrer" 
             className="relative-block">
            <img
              src={Img3}
              alt="Program"
              className="w-full h-33 object-cover max-[330px]:h-40"
            />
            <span className="absolute top-5 right-0 bg-red-500 text-white px-5 py-1 max-[380px]:px-2 max-[380px]:text-[14px]
             text-[18px] font-stretch-50% rounded">
                APPLY NOW
            </span>
            </a>
            <h3 className="absolute bottom-3 left-3 text-white font-bold text-2xl drop-shadow-md max-[260px]:text-[20px]">
              Doctorod Philosophy in Computer Application
            </h3>
          </div>

          {/* Content Area */}
          <div className="p-12 text-gray-700 text-sm max-[380px]:p-6">
            <div className="flex items-center gap-2">
            <Clock9 className="w-4 h-4 text-gray-700" strokeWidth={2} />
            <p className="text-[#4f65be] font-semibold mb-1">Duration : 3 Yr.</p>
            </div>

             <hr className="my-4 border-t-1 border-gray-400"/>
            <a href="/program" className="text-[#4f65be] cursor-pointer hover:text-black font-stretch-50% text-[18px] mb-2 -mt-1">
              Doctorod Philosophy in Computer Application
            </a>
            <p className="mb-5 mt-2">
              <span className="font-bold">Eligibility</span> - Masters, 60%, From the same subject
            </p>

            <hr className="my-4 border-t-1 border-gray-400" />
            <p className="font-bold mb-2">Program Coordinator</p>

            <div className="w-full">
            <table className="w-full border text-sm bg-gray-100 border-gray-400 table-auto max-[280px]:hidden">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2 w-2/5">Name</td>
                  <td className="px-2 py-2">Dr. Mohammad Kalamuddin</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="px-2 py-2">Email</td>
                  <td className="px-2 py-2">mohdkalam@iul.ac.in</td>
                </tr>
              </tbody>
            </table>
            {/* Mobile view stacked layout */}
            <div className="gap-3 max-[280px]:block hidden">
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                 <p className="font-bold">Name</p>
                 <p>Dr. Mohd Faizan</p>
             </div>
             <div className="bg-gray-100 p-2 rounded border border-gray-400">
                <p className="font-bold">Email</p>
               <p>mdfaizan@iul.ac.in</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Program;
