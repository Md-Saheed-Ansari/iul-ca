import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import HeroTemplate from "../pages/about/HeroTemplate"

const Achievements = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null); // close sub-dropdowns when switching section
  };

  const toggleSubAccordion = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

   const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);

          const tableClass = "w-full table-auto break-words border border-gray-300 text-sm text-center";
          const thClass = "border border-gray-300 px-2 py-4 text-[12px] bg-[#4f65be] text-white";
          const tdClass = "border border-gray-300 px-4 py-6";
  
  const conferencesData = [
  {
    title: "Placement and Higher Education",
    table: {
      headers: ["SR NO", "NAME", "PROGRAM", "SESSION", "PROGRESSION", "REMARK PLACEMENT TYPE"],
      rows: [
        ["1", "Binoo Kumar Madhesia", "Bachelor of Computer Application", "2023-24", "Placement/Higher Education",
         "Master of Computer Application"],
        ["2", "Nagma Khan",	"Bachelor of Computer Application",	"2023-24", "Placement/Higher Education", "Master of Computer Application"],
        ["3", "Mohd Ahmed",	"Bachelor of Computer Application",	"2023-24", "Placement/Higher Education", "Master of Computer Application"],
        ["4", "Parvej Alam", "Bachelor of Computer Application", "2023-24",	"Placement/Higher Education", "Master of Computer Application"]
      ]
    }
  }
];

const seminarsData = [
  {
    title: "Civil Services/Gate/NET/SLET/GRE/Alumni/Others",
    table: {
      headers: ["SR NO", "NAME", "PROGRAM", "YEAR", "SELECTION", "DETAILS"],
      rows: [
        ["1", "Yashfi, Haniya Alamgeer, Ridhima Singh",	"Bachelor of Computer Application",	"2023-24",
        "Award", "Winner of Poster-making competition and an online quiz on E-waste management"],
        ["2", "Mohit Kumar", "Master of Computer Application", "2021-22", "Award",
         "Winner of Cyber Swachhta e-Quiz organized on 30th October 2021"],
        ["3", "Tribhuwan Raj",	"Master of Computer Application", "2021-22", "Award",
         "Winner in Cyber Security Slogan Writing Competition on 28-29th October 2021"],
        ["4", "Moazzam Ahmad Khan",	"Bachelor of Computer Application",	"2021-22",	"Award",
         "Winner of 'Cybernetics' e-Quiz on 26th October 2021"]
      ]
    }
  }
];

  return (
    <>
    <PageBanner breadcrumb="Home / Achievements " />
     <HeroTemplate stats={stats}/>
    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 bg-gray-50">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-6">Departmental Achievements</h2>
        <hr className="border-gray-300 w-20" />
      </div>

      {/* Accordion */}
      <div className="space-y-2">

        {/*  Student Progression */}
        <div  className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(0)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 0 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Student Progression
              <span className="text-gray-500">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 0 && (
            <div className="bg-white px-4 py-3">
              {/* Sub-dropdowns */}
              <div className="space-y-2">
                {conferencesData.map((sub, idx) => (
                    <div key={idx} className="border break-words border-gray-300">
                      <button
                        onClick={() => toggleSubAccordion(idx)}
                        className="w-full flex justify-between items-center cursor-pointer px-4 py-2 text-left text-green-700 font-semibold bg-gray-100"
                      >
                        {sub.title}
                        <span>{openSubIndex === idx ? "−" : "+"}</span>
                      </button>

                      {openSubIndex === idx && (
                      <div className="overflow-x-auto bg-white px-4 md:px-6 py-3 box-border">
                      <table className={tableClass}>
                       <thead>
                       <tr>
                        {conferencesData[idx].table.headers.map((header, i) => (
                       <th key={i} className={thClass}>{header}</th>
                         ))}
                      </tr>
                      </thead>
                     <tbody>
                       {conferencesData[idx].table.rows.map((row, rowIndex) => (
                     <tr key={rowIndex}>
                     {row.map((cell, cellIndex) => {
                       const isLinkColumn = conferencesData[idx].table.headers[cellIndex] ===  "REPORT UPLOAD / URL";
                       return (
                     <td key={cellIndex} className={tdClass}>
                       {isLinkColumn ?  (
                      <a href={cell} target="_blank" rel="noopener noreferrer" className="text-[#4f65be] hover:underline hover:text-black cursor-pointer">
                       View
                      </a>
                      ) : (
                       cell
                       )}
                     </td>
                       );
                     })}
                   </tr>
                    ))}
                 </tbody>
               </table>
              </div>
                 )}
                </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

       {/* Student Achievements (Awards and Recognitions)  */}
        <div  className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(1)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 1 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Student Achievements (Awards and Recognitions) 
              <span className="text-gray-500">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 1 && (
            <div className="bg-white px-4 py-3">
              {/* Sub-dropdowns */}
              <div className="space-y-2">
                {seminarsData.map((sub, idx) => (
                    <div key={idx} className="border break-words border-gray-300">
                      <button
                        onClick={() => toggleSubAccordion(idx)}
                        className="w-full flex justify-between items-center cursor-pointer px-4 py-2 text-left text-green-700 font-semibold bg-gray-100"
                      >
                        {sub.title}
                        <span>{openSubIndex === idx ? "−" : "+"}</span>
                      </button>

                      {openSubIndex === idx && (
                      <div className="overflow-x-auto bg-white px-4 md:px-6 py-3 box-border">
                      <table className={tableClass}>
                       <thead>
                       <tr>
                        {seminarsData[idx].table.headers.map((header, i) => (
                       <th key={i} className={thClass}>{header}</th>
                         ))}
                      </tr>
                      </thead>
                     <tbody>
                       {seminarsData[idx].table.rows.map((row, rowIndex) => (
                     <tr key={rowIndex}>
                     {row.map((cell, cellIndex) => {
                       const isLinkColumn = seminarsData[idx].table.headers[cellIndex] ===  "REPORT UPLOAD / URL";
                       return (
                     <td key={cellIndex} className={tdClass}>
                       {isLinkColumn ?  (
                      <a href={cell} target="_blank" rel="noopener noreferrer" className="text-[#4f65be] hover:underline hover:text-black cursor-pointer">
                       View
                      </a>
                      ) : (
                       cell
                       )}
                     </td>
                       );
                     })}
                   </tr>
                    ))}
                 </tbody>
               </table>
              </div>
                 )}
                </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* Faculty Awards / Recognitions / Grants */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(2)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 2 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Faculty Awards / Recognitions / Grants 
              <span className="text-gray-500">
                {openIndex === 2 ? "−" : "+"}
              </span>
            </button>
          {openIndex === 2 && (
            <div className="bg-white px-4 md:px-6 py-3 overflow-x-auto box-border">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>SR NO</th>
                    <th className={thClass}>SESSION</th>
                    <th className={thClass}>NAME</th>
                    <th className={thClass}>AWARD/RECOGNITION/SELECTION</th>
                    <th className={thClass}>NAME OF AWARD/RECOGNITION/SELECTION</th>
                    <th className={thClass}>DETAILS</th>
                    <th className={thClass}>VIEW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>2024-25</td>
                    <td className={tdClass}>Dr Prasanna Jeyanthi Marimuthu, Ms. Supriya Suresh</td>
                    <td className={tdClass}>Award</td>
                    <td className={tdClass}>Comptroller-General of Patents, Designs and Trade Marks, Intellectual Property Office_UK Design</td>
                    <td className={tdClass}>Sensor-Based Wireless Earbuds with Noise Cancellation: A New Era of Audio</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20241115210536394Bably%20dolly.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>2024-25</td>
                    <td className={tdClass}>Dr. Md Faizan, Dr. Ausaf Ahmad, Dr. Md Waris Khan</td>
                    <td className={tdClass}>Award</td>
                    <td className={tdClass}>National Patent</td>
                    <td className={tdClass}>Data Processing Device For 5G Communication</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250121111543803436861.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>2024-25</td>
                    <td className={tdClass}>Vishal Agarwal</td>
                    <td className={tdClass}>Award</td>
                    <td className={tdClass}>National Patent</td>
                    <td className={tdClass}>A Machine Learning-Driven Wearable Sensor Monitoring and Classification based Personalised Healthcare System</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250124223047677Vishal%20Agarwal.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                    <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>2024-25</td>
                    <td className={tdClass}>Dr. Amardeep Gupta, Dr Bably Dolly, Dr. Sunil Babu</td>
                    <td className={tdClass}>Award</td>
                    <td className={tdClass}>Comptroller-General of Patents, Designs and Trade Marks, Intellectual Property Office_UK Design</td>
                    <td className={tdClass}>Sensor-Based Robotic Display For Interactive Marketing</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250124230719090Bably%20Dolly.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Achievements / Collaborations  */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(3)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 3 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Achievements / Collaborations  
              <span className="text-gray-500">
                {openIndex === 3 ? "−" : "+"}
              </span>
            </button>
          {openIndex === 3 && (
            <div className="bg-white px-4 md:px-6 py-3 overflow-x-auto box-border">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>SR NO</th>
                    <th className={thClass}>SESSION</th>
                    <th className={thClass}>ACHIEVEMENT NAME / COLLABORATION</th>
                    <th className={thClass}>DETAILS OF COLLABORATION / ACHIEVEMENTS</th>
                    <th className={thClass}>VIEW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>2023-24</td>
                    <td className={tdClass}>Achievement Name</td>
                    <td className={tdClass}>Poster-making competition and an online quiz on E-waste management</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/2024110511111474620240822091426562Poster%20making%20Competition.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>2023-24</td>
                    <td className={tdClass}>Achievement Name</td>
                    <td className={tdClass}>TEKKEN-7 TOURNAMENT</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/2024110511123618820230528221119829Tekken-7.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>2023-24</td>
                    <td className={tdClass}>Achievement Name</td>
                    <td className={tdClass}>Debate Competition</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/2024110511134277020221222150100275Seminar_Debate_Report_2022.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                    <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>2023-24</td>
                    <td className={tdClass}>Achievement Name</td>
                    <td className={tdClass}>Know Your Heroes Quiz 2022</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/2024110511141623520220825091337651Report%20_Know%20Your%20Heroes%20Quiz%202022.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>


      </div>
    </section>
    </>
  );
};

export default Achievements;
