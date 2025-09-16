import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import HeroTemplate from "../pages/about/HeroTemplate"

const Activities = () => {
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
    title: "Conferences (Organized)",
    table: {
      headers: ["SR NO", "CONFERENCE NAME", "LEVEL", "COLLABORATING DEPARTMENTS", "FROM DATE", "TO DATE", "REPORT UPLOAD / URL"],
      rows: [
        ["1", "International Conference on Advances in Science, Engineering and Technology (ICASET-2024)",
        "International", "Uttar Pradesh Council of Science & Technology (UPCST)",	"30/07/2024", "31/07/2024", "https://www.iul.ac.in/DWC/Research/PDF/20240912143819693Internation%20Conference%20on%20ICASET-2024),%20Computer%20Application.pdf"],
        ["2", "International Conference on Emerging Trends and Its Impact on Law (ETTIL-2022)",	
        "International", "Faculty of Law", "29/03/2022",	"30/03/2022", "https://www.iul.ac.in/DWC/Research/PDF/20220410165330050ETTIL_2022_Report.pdf"],
        ["3", "RECENT ADVANCEMENTS IN INFORMATION AND COMMUNICATION TECHNOLOGY", "International",
    	"TECHNICALLY CO-SPONSORED BY IEEE UTTAR PRADESH SECTION", "05/11/2020",	"07/11/2020", "https://www.iul.ac.in/DWC/Research/PDF/20210318120027861_Computer%20Application-RAICT%202020%20Report.pdf"],
      ]
    }
  },
  {
    title: "Conferences (Participation)",
    table: {
      headers: ["SR NO", "CONFERENCE NAME", "LEVEL", "ORGANIZED BY / HELD AT", "FROM DATE", "TO DATE", "NAME OF PARTICIPANT WITH BIO"],
      rows: [
        ["1", "2024 IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2024)",	"International", "NIT Goa", 
         "02/12/2024",	"05/12/2024",	"Dr. Tasneem Ahmed, Associate Professor"],
        ["2", "2nd International Conference on Recent Trends in Multidisciplinary Research and Innovation(ICMRI)",	"International", 
         "Jointly Organized by International Institute for Special Education (IISE), Lucknow And Integral & Innovative Sustainable Education College, Lucknow Held At: IISE Group Of Institutions",
         "29/11/2024",	"30/11/2024",	"Mr. Vishal Agarwal, Assistant Professor"],
        ["3", "Computing, Power and Communication Technologies (IC2PCT), IEEE International Conference on",	"International",
         "Computation of Big Data Security through Cross-Layer Techniques",	"09/02/2024", "10/02/2024",	"Dr. Shweta Dwivedi, Assistant Professor"],
      ]  
    }
  },
];

const seminarsData = [
  {
    title: "Seminars / Workshops / FDPs / Other (Organized)",
    table: {
      headers: ["SR NO", "ACTIVITY", "TITLE OF ACTIVITY", "COLLABORATING DEPARTMENTS", "FROM DATE", "TO DATE",  "REPORT UPLOAD / URL"],
      rows: [
        ["1", "Workshop",	"Mastering GitHub: A Hands-on Workshop", "Department of Computer Application, Integral University, Lucknow",
         "10/04/2025",	"11/04/2025", "https://www.iul.ac.in/DWC/Research/PDF/20250630093811299IU%20Mail%20-%20Report%20on%20Workshop%20%E2%80%9CMastering%20GitHub_%20A%20Hands-on%20Workshop%E2%80%9D%20organised%20by%20the%20Dept%20of%20Computer%20Application.pdf"],
        ["2", "Workshop",	"MERN stack Development",	"Department of Computer Application, Integral University, Lucknow in collaboration with Sipher Web Pvt. Ltd.",
         "28/01/2025",	"30/01/2025", "https://www.iul.ac.in/DWC/Research/PDF/20250212133647432Merk%20Stack.pdf"],
        ["3", "Workshop", "The Cyber Resilience",	"Warlock Cyber Security, Organized by Cyber Awareness Club",
         "03/09/2024",	"03/09/2024", "https://www.iul.ac.in/DWC/Research/PDF/20250910102107979Report%20on%201%20Day%20Workshop%20The%20Cyber%20Resilience.pdf"],
        ["4", "Workshop", "Cyber Security and Ethical Hacking",	"Department of Computer Application, Integral University Lucknow",
         "13/08/2024",	"13/08/2024", "https://www.iul.ac.in/DWC/Research/PDF/20250910102501523IU%20Mail%20-%20Report%20on%201%20Day%20Workshop%20_Cyber%20Security%20and%20Ethical%20Hacking%E2%80%9D%20Organized%20by%20Department%20of%20Computer%20Application.pdf"]
      ]
    }
  },
  {
    title: "Seminars / Workshops / FDPs / Other (Participation)",
    table: {
      headers: ["SR NO", "ACTIVITY", "TITLE OF ACTIVITY", "ORGANIZED BY / HELD AT", "FROM DATE", "TO DATE", "NAME OF PARTICIPANT WITH BIO"],
      rows: [
        ["1", "FDP", "Mentoring Skills for Effecting Curriculum Implementation", "Organized By:Department of Electrical Engineering in association HRDC Integral University, Lucknow in collaboration with NITTTR, Chandigarh as a remote center. Held Virtual",
         "03/03/2025",	"07/03/2025",	"Mr. Vishal Agarwal, Assistant Professor"],
        ["2", "FDP", "Mastering Cloud Computing Essentials with AWS", "Organized By:Department of Computer Sciense & Engineering and Department of Computer Application & Information Technology in association HRDC Integral University, Lucknow in collaboration with NITTTR, Chandigarh as a remote center. Held Virtual",
         "03/03/2025",	"07/03/2025", "Mohammad Arif Ali Usmani, Assistant Professor; Mr. Sarfaraz Alam, Assistant Professor; ; Mr. Safikur Rehman, Assistant Professor"],
        ["3", "Workshop",	"AI Dashboards using Microsoft Power BI", "Organized by Mr. Jatan Shah (Microsoft Certified Trainer Co-Founder & CEO, Skill Nation), Held at Online Mode",
         "01/03/2025",	"02/03/2025",	"Mr. Pankaj Kumar, Assistant Professor"],
        ["4", "FDP", "Full Stack Developemnt with PHP & Mysql",	"E & ICT Academy, IIT Kanpur",	"24/02/2025", "01/03/2025",
          "Mr. Pankaj Kumar, Assistant Professsor"]
      ]  
    }
  },
];

const guestLectureData = [
  {
    title: "Guest / Expert Lecture (Organized)",
    table: {
      headers: ["SR NO", "TOPIC", "NAME", "DATE", "BIO OF RESOURCE PERSON", "REPORT"],
      rows: [
        ["1", "Digital Ethics under the program UGC -Life Skills(Jeevan Kaushal)",	"Prof. (Dr.) Shish Ahmad", "28/02/2025", 
        "Head, Department of Computer Science and Engineering, Integral University, Lucknow", "https://www.iul.ac.in/DWC/Research/PDF/20250630101244070IU%20Mail%20-%20Report%20on%20Expert%20Talk%20_Digital%20Ethics_%20under%20the%20program%20UGC%20-Life%20Skills(Jeevan%20Kaushal)%20organized%20by%20Department%20of%20Computer%20Applications.pdf"],
        ["2", "Improving Resilience of Resource-Constrained Networks against Cyber Attacks", "Dr. Abhishek Verma", "04/02/2025",
         "Assistant Professor, Department of Information Technology, Babasaheb Bhimrao Ambedkar University (BBAU), Lucknow", "https://www.iul.ac.in/DWC/Research/PDF/20250410201526334%E2%80%9CImproving%20Resilience%20of%20Resource-Constrained%20Networks%20against.pdf"],
        ["3", "Navigating Through Career Challenges in the Current Market Scenario", "Mr. Anil Tripathi", "29/01/2025", 
            "Mr. Anil Tripathi, Senior Vice President, Expertrons", "https://www.iul.ac.in/DWC/Research/PDF/20250326095748232IU%20Mail%20-%20Report%20on%20Expert%20Talk%20_Navigating%20Through%20Career%20Challenges%20in%20the%20Current%20Market%20Scenario_%20organised%20by%20Department%20of%20Computer%20Application.pdf"],
        ["4", "We, AI and World: Discover Your Creer Path", "Mr. Prashant Malviya",	"03/10/2024", "Mr. Prashant Malviya, AI Consultant (TCS)",
          "https://www.iul.ac.in/DWC/Research/PDF/20241023144321286Report%20on%20we%20and%20AI.pdf"]
      ]
    }
  },
  {
    title: "Guest / Expert Lecture (as Resource Person)",
    table: {
      headers: ["SR NO", "TOPIC", "BIO OF RESOURCE PERSON", "DATE", "HELD AT", "REPORT, IF AVAILABLE"],
      rows: [
        ["1", "Satellite Image Analysis for Land Surface Monitoring", "Dr. Tasneem Ahmed, Assistant Professor",	"27/04/2019", 
         "Advanced Image and Data Science Lab, Department of Information Technology, IIIT Allahabad (U.P), India",
          "https://www.iul.ac.in/DWC/Research/PDF/20201022151739422WorkshopDetailsSatelliteImageAnalysis1261.pdf"],
        ["2", "Efficient Cloud and Its Resources",	"Mr. Khalid Jamal, Assistant Professor", "25/05/2022",	"The Study Hall College, Lucknow", 
          "https://www.iul.ac.in/DWC/Research/PDF/#"],
        ["3", "Programming with PL/SQL", "Mr. Farooq Ahmad, Assistant Professor", "20/11/2021",	
         "Advanced Computing Research Lab, Department of Computer Application, Integral University Lucknow", "https://www.iul.ac.in/DWC/Research/PDF/20220211100701085Mr.%20Farooq%20Ahmad.pdf"],
        ["4", "Computer Concepts & Principle of Programming", "Mr. Farooq Ahmad, Assistant Professor",	"19/11/2020",
         "Online session given to new International Students held at Integral University, Lucknow", "https://www.iul.ac.in/DWC/Research/PDF/20220211100229192guest%20lecture%20farooq%20sir.pdf"]
      ]  
    }
  },
];

  return (
    <>
    <PageBanner breadcrumb="Home / Activities " />
     <HeroTemplate stats={stats}/>
    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 bg-gray-50">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-6">Departmental Activities</h2>
        <hr className="border-gray-300 w-20" />
      </div>

      {/* Accordion */}
      <div className="space-y-2">

        {/*  Conferences */}
        <div  className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(0)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 0 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Conferences
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

       {/* Seminars / Workshops / FDPs */}
        <div  className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(1)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 1 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Seminars / Workshops / FDPs
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

        {/* Co & Extra Curricular Activity */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(2)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 2 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Co & Extra Curricular Activity  
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
                    <th className={thClass}>NAME OF EVENTS</th>
                    <th className={thClass}>HELD AT</th>
                    <th className={thClass}>NO OF PARTICIPANT</th>
                    <th className={thClass}>FROM DATE</th>
                    <th className={thClass}>TO DATE</th>
                    <th className={thClass}>ORGANIZED BY</th>
                    <th className={thClass}>REPORT IF ANY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>IPR Awareness in Academic Institution</td>
                    <td className={tdClass}>Integral University, Lucknow</td>
                    <td className={tdClass}>76</td>
                    <td className={tdClass}>10/03/2025</td>
                    <td className={tdClass}>10/03/2025</td>
                    <td className={tdClass}>Dr. Mohd. Amir Ansari and Mr. Vishal Agarwa</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250630123707100IU%20Mail%20-%20Report%20on%20Online%20Quiz%20on%20_IPR%20Awareness%20in%20Academic%20Institution_%20organized%20by%20Department%20of%20Computer%20Application.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>Essay Writing Competition On the topic Importance of communal harmony for growth of nation</td>
                    <td className={tdClass}>Integral University, Lucknow</td>
                    <td className={tdClass}>55</td>
                    <td className={tdClass}>10/03/2025</td>
                    <td className={tdClass}>10/03/2025</td>
                    <td className={tdClass}>Dr. Mohd Suhaib Kidwai, Mr. Qazi Saeed Ahmad, Mr. Safikur Rahman Khan and Mr. Sumit Yadav</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250630124455565IU%20Mail%20-%20Report%20of%20Essay%20Writing%20Competition%20organized%20by%20the%20Department%20of%20Computer%20Application.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>Quiz Competition on Gender Equity held on 8th March 2025</td>
                    <td className={tdClass}>Integral University, Lucknow</td>
                    <td className={tdClass}>65</td>
                    <td className={tdClass}>08/03/2025</td>
                    <td className={tdClass}>08/03/2025</td>
                    <td className={tdClass}>Dr. Suhaib Kidwai, Mr. Qazi Saeed Ahmad, Mr. Shafiqur Rahman Khan and Mr. Sumit Yadav</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250502092500966IU%20Mail%20-%20Report%20on%20Quiz%20Competition%20on%20_Gender%20Equity_held%20on%208th%20March%202025.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                    <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>CloudQuest—A Cloud Computing Quiz Competition</td>
                    <td className={tdClass}>Integral University, Lucknow</td>
                    <td className={tdClass}>65</td>
                    <td className={tdClass}>06/03/2025</td>
                    <td className={tdClass}>06/03/2025</td>
                    <td className={tdClass}>Department of Computer Application at Integral University, in collaboration with 42Peaks Pvt. Ltd.</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250630094051966IU%20Mail%20-%20Report%20of%20CloudQuest,%20A%20Cloud%20Computing%20Quiz%20Competition%20organised%20by%20Department%20of%20Computer%20Application.pdf" 
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

        {/* Guest Lectures / Expert Talks */}
        <div className="border-b border-gray-200">
          <button
              onClick={() => toggleAccordion(3)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 3 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Guest Lectures / Expert Talks 
              <span className="text-gray-500">
                {openIndex === 3 ? "−" : "+"}
              </span>
            </button>

          {openIndex === 3 && (
            <div className="bg-white px-4 py-3">
              {/* Sub-dropdowns */}
              <div className="space-y-2">
                {guestLectureData.map((sub, idx) => (
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
                        {guestLectureData[idx].table.headers.map((header, i) => (
                       <th key={i} className={thClass}>{header}</th>
                         ))}
                      </tr>
                      </thead>
                     <tbody>
                       {guestLectureData[idx].table.rows.map((row, rowIndex) => (
                     <tr key={rowIndex}>
                     {row.map((cell, cellIndex) => {
                       const header = guestLectureData[idx].table.headers[cellIndex];
                       const isLinkColumn = header === "REPORT" || header === "REPORT, IF AVAILABLE";
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

        {/* Extension Activities */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(4)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 4 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Extension Activities  
              <span className="text-gray-500">
                {openIndex === 4 ? "−" : "+"}
              </span>
            </button>
          {openIndex === 4 && (
            <div className="bg-white px-4 md:px-6 py-3 overflow-x-auto box-border">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>SR NO</th>
                    <th className={thClass}>NAME OF ACTIVITY</th>
                    <th className={thClass}>HELD AT</th>
                    <th className={thClass}>RESOURCE PERSONS / COLLABORATING AGENCIES</th>
                    <th className={thClass}>FROM DATE</th>
                    <th className={thClass}>TO DATE</th>
                    <th className={thClass}>REPORT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>Cyber Frauds Awareness Program Under the initiative of: Digital Saksharta Abhiyaan</td>
                    <td className={tdClass}>Government Basic School in Basaha, Bakshi Ka Talab Block, Kursi Road, Lucknow</td>
                    <td className={tdClass}>Dr. Mohd. Suhaib Kidwai, Mr. Qazi Saeed Ahmad, Mr. Shafiqur Rahman, and Mr. Sumit Yadav.</td>
                    <td className={tdClass}>2025-04-17</td>
                    <td className={tdClass}>2025-04-17</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250630094706971IU%20Mail%20-%20Report%20on%20Cyber%20Fraud%20Awareness%20Program%20organized%20by%20the%20Department%20of%20Computer%20Application.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>KOSHISH: A Donation Drive at Fiesta 2025</td>
                    <td className={tdClass}>Integral University</td>
                    <td className={tdClass}>Department of Computer Application, in collaboration with Integral University Social Service (IUSS)</td>
                    <td className={tdClass}>2025-02-20</td>
                    <td className={tdClass}>2025-02-20</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250326093951157IU%20Mail%20-%20Report%20on%20Donation%20Drive-_Koshish_%20organized%20by%20Dept%20of%20Computer%20Application.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>Cyber Frauds Awareness under the Digital Saksharta Abhiyaan</td>
                    <td className={tdClass}>Government Girls Inter College</td>
                    <td className={tdClass}>Mr. Qazi Saeed Ahmad, Mr. Shafiqur Rehman and Mr. Sumit Yadav</td>
                    <td className={tdClass}>2024-11-12</td>
                    <td className={tdClass}>2024-11-12</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20250114191539069Extension%20Activity.pdf" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                    <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>Cyber Frauds Awareness</td>
                    <td className={tdClass}>Village Paikaramau, Kursi Road, Lucknow</td>
                    <td className={tdClass}>Mr. Tabrez Khan, Mr. Safikur Rahman Khan, Dr. Suhaib Kidwai</td>
                    <td className={tdClass}>2024-03-20</td>
                    <td className={tdClass}>2024-03-20</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20240821004439978Extension%20Activities%20march%202024.pdf" 
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

        {/* Sports */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(5)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 5 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Sports  
              <span className="text-gray-500">
                {openIndex === 5 ? "−" : "+"}
              </span>
            </button>
          {openIndex === 5 && (
            <div className="bg-white px-4 md:px-6 py-3 overflow-x-auto box-border">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>SR NO</th>
                    <th className={thClass}>NAME OF SPORT EVENTS</th>
                    <th className={thClass}>HELD AT</th>
                    <th className={thClass}>FROM DATE</th>
                    <th className={thClass}> TO DATE</th>
                    <th className={thClass}>PARTICIPANTS NAME WITH DETAILS</th>
                    <th className={thClass}>ORGANIZED BY</th>
                    <th className={thClass}>REPORT IF ANY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>Cricket Championship (M)</td>
                    <td className={tdClass}>Integral University sports ground</td>
                    <td className={tdClass}>12/11/2022</td>
                    <td className={tdClass}>14/11/2022</td>
                    <td className={tdClass}>Captain: Java Qalandars - Qamaruzzama, Web Masters -Rashid, Python Warriors -Aftab ,C Sikandars -Shamsul Hasan</td>
                    <td className={tdClass}>Department of Computer application</td>
                    <td className={tdClass}>
                      <a href="https://www.iul.ac.in/DWC/Research/PDF/20221207100424993IU%20Mail%20-%20Brief%20Report%20on%20Cricket%20Championship%20(M)%20organized%20by%20Department%20of%20Computer%20Application,%20Integral%20University,%20Lucknow_.pdf" 
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

export default Activities;
