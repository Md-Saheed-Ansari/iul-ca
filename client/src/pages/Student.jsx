import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import HeroTemplate from "../pages/about/HeroTemplate"

const Student = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
    
         useEffect(() => {
            setTimeout(() => {
              setStats({ programs: 3, teachers: 56, research: 43 });
            }, 1000);
          }, []);
  

  // Data for dropdowns
  const data = [
    {
      title: "Ordinances",
      content: [
      ],
    },
    {
      title: "Time Table",
      content: [
        { date: "04/08/2025", text: "BCA First Year Group A", url: "https://www.iul.ac.in/DWC/TimeTable/fileupload/Computer%20Application/_Computer%20Application-133983405925122253.pdf" },
        { date: "04/08/2025", text: "BCA First Year Group B", url: "https://www.iul.ac.in/DWC/TimeTable/fileupload/Computer%20Application/_Computer%20Application-133983405754877939.pdf" },
        { date: "04/08/2025", text: "BCA First Year Group C", url: "https://www.iul.ac.in/DWC/TimeTable/fileupload/Computer%20Application/_Computer%20Application-133983405392048979.pdf" },
        { date: "04/08/2025", text: "BCA First Year Group D", url: "https://www.iul.ac.in/DWC/TimeTable/fileupload/Computer%20Application/_Computer%20Application-133983405182049590.pdf" },
        { date: "04/08/2025", text: "BCA First Year Group E", url: "https://www.iul.ac.in/DWC/TimeTable/fileupload/Computer%20Application/_Computer%20Application-133983405017675337.pdf" },
      ],
    },
    {
      title: "Syllabus",
      content: [
         {
          heading: "Bachelor of Computer Application: Sem-1",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-8783-semester%201_syllabus.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-2200-1.%20Sem%201.pdf" },
          ],
        },
        {
          heading: "Bachelor of Computer Application: Sem-2",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-2791-BCA%202nd%20new%20merge.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-2619-2.%20Sem%202.pdf" },
          ],
        },
        {
          heading: "Bachelor of Computer Application: Sem-3",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-2896-19_Computer%20Application-7824-19_Computer%20Application-7226-BCA%203rd%20Sem.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-4235-semester%203_old.pdf" },
          ],
        },
        {
          heading: "Bachelor of Computer Application: Sem-4",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-7701-19_Computer%20Application-7226-BCA%204th%20Sem.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-1825-semester%204_old.pdf" },
          ],
        },
        {
          heading: "Bachelor of Computer Application: Sem-5",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-4919-19_Computer%20Application-3389-19_Computer%20Application-7226-BCA%205th%20Sem.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-7206-semester%205_old.pdf" },
          ],
        },
        {
          heading: "Bachelor of Computer Application: Sem-6",
          items: [
            { text: "Syllabi", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-7778-19_Computer%20Application-7226-BCA%206th%20Sem.pdf" },
            { text: "Evaluation Scheme", url: "https://www.iul.ac.in/DWC/Syllabus/fileupload/19_Computer%20Application-8560-semester%206_old.pdf" },
          ],
        }
      ],
    },
    {
      title: "Notices",
      content: [
        { date: "07/07/2025", text: "Schedule Plan: Supplementary Theory Examination", url: "https://www.iul.ac.in/DWC/DeptNewsNotice/fileupload/Computer%20Application/_Computer%20Application-133963319442577611.pdf" },
        { date: "29/07/2025", text: "List of Programme Coordinators & Course Coordinators For Odd Semester (Session 2025-26)", url: "https://www.iul.ac.in/DWC/DeptNewsNotice/fileupload/Computer%20Application/_Computer%20Application-133959952720249322.pdf" },
        { date: "03/07/2025", text: "Academic Calender: Odd Semester, Session 2025-2026 (For First Year Student)", url: "https://www.iul.ac.in/DWC/DeptNewsNotice/fileupload/Computer%20Application/_Computer%20Application-133959903682289633.pdf"}
      ],
    },
  ];

  return (
    <>
    <PageBanner breadcrumb="Home / Student " />
     <HeroTemplate stats={stats}/>
    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 bg-gray-50">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-6">Student's Zone</h2>
        <hr className="border-gray-300 w-20" />
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === index ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              {item.title}
              <span className="text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="bg-white px-4 py-2">
                {item.content.map((c, i) => (
                  <div key={i} className="py-6 border-b last:border-b-0 text-gray-300 flex items-center"
                  >
                    {c.date && (
                    <a href={c.url}
                    target="_blank"
                     rel="noopener noreferrer"
                     className="group">
                    <span className="font-bold mr-2 text-[#4f65be] group-hover:text-black group-hover:underline">{c.date} :</span>
                    <span className="text-[#4f65be] cursor-pointer group-hover:text-black group-hover:underline">
                      {c.text}
                    </span>
                    </a>
                    )}

                    {/* Case 2: Section with heading + list */}
                    {c.heading && (
                      <div className="px-2 -mt-2">
                        <h4 className="font-stretch-50% text-xl text-[#4f65be] mb-2">{c.heading}</h4>
                        <ul className="list-disc text-black list-inside text-md space-y-1 ml-35">
                          {c.items.map((it, j) => (
                            <li key={j}>
                              <a
                                href={it.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#4f65be] hover:text-black hover:underline"
                              >
                                {it.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Student;
