import React, { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import HeroTemplate from "../pages/about/HeroTemplate"

const Research = () => {
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
  
  const publicationData = [
  {
    title: "Conferences/ Seminars/ Symposiums",
    table: {
      headers: ["SR NO", "AUTHOR NAME", "TITLE", "CONFERENCE NAME", "HELD AT", "FROM DATE", "TO DATE", "ORGANIZER NAME", "PUBLICATION LINK"],
      rows: [
        ["1",	"Safikur Rahman Khan, Mohd Waris Khan",	"A Comprehensive Review of Privacy-Preserving Techniques in Health Data Analysis",
          "International Conference on Cognitive Computing in Engineering, Communications, Sciences and Biomedi",	
          "School Of Engineering,Gautam Buddha University, Gr. Noida, India",	"16/01/2025",	"18/01/2025",	"IEEE", "https://ieeexplore.ieee.org/document/10991179"],
        ["2",	"Priya Sharma, Mohd Waris Khan",	"A Review of Digital Forensics Techniques and Emerging Trends",	
          "International Conference on Cognitive Computing in Engineering, Communications, Sciences and Biomedi", 
          "Greater Noida, India",	"16/01/2025",	"18/01/2025",	"IEEE", "https://ieeexplore.ieee.org/document/10990354"],
        ["3",	"Nadiya Parveen, Mohd Waris Khan",	"Leveraging Emoticon Scores for Improved Sentiment Detection in Social Media Using Machine Learning Techniques",
          	"International Conference on Cognitive Computing in Engineering, Communications, Sciences and Biomedi",
            	"Greater Noida, India", "16/01/2025",	"18/01/2025",	"IEEE", "https://ieeexplore.ieee.org/document/10990478"],
        ["4",	"Surendra Kumar, Pawan Kumar, Jaydip Kumar, Virendra Singh, Arun Singh Yadav",
          "Securing Cloud-Based Systems: DDoS Attack Mitigation using Hypervisor-Intrusion Detection Approach",	
          "Sixth International Conference on Futuristic Trends in Networks and Computing Technologies (FTNCT06)",
          "Graphic Era Hill University, Haldwani Campus",	"23/12/2024",	"24/12/2024",	"Procedia Computer Science, Elsevier", "https://www.sciencedirect.com/science/article/pii/S1877050925011925"]
      ]
    }
  },
  {
    title: "Journal",
    table: {
      headers: ["SR NO", "AUTHOR NAME", "TITLE", "JOURNAL NAME", "VOLUME NO", "ISSUE NO", "PAGE NO", "YEAR OF PUBLICATION", "INDEXING", "IMPACT FACTOR NAME", "URL"],
      rows: [
        ["1",	"Mohd Waris Khan et al.",	"A fusion framework for Hinglish cyberbullying detection using mBERT and FastText",	
          "International Journal of Engineering in Computer Science",	"6",	"1",	"7-14", "2025",	
          "Not Index In Scopus / UGC Care",	"NA", "https://www.computersciencejournals.com/ijecs/article/view/149/7-1-3"],
        ["2",	"Nadiya Parveen, Mohd Waris Khan",	"A Conceptual Framework for Leveraging Web Data in Sentiment Analysis and Opinion Mining",	
          "Journal of Information Systems Engineering and Management",	"10",	"41s",
          	"562-570",	"2025",	"Scopus",	"NA", "https://www.jisem-journal.com/index.php/journal/article/view/7917"],
        ["3",	"Afreen Khan, Swaleha Zubair, Irfan Ali",	"ADNeuroNet: a neuroevolution-based neural network algorithm for the diagnosis of neurodegenerative d",
          	"Neural Computing and Applications",	"NA",	"NA",	"1-35",	"2025",
            	"Web of Science",	"JCR of Web of Science", "https://link.springer.com/article/10.1007/s00521-025-11021-y"],
        ["4",	"Isarar Khan, Muhammad Kalamuddin Ahamad",	"Enhancing Security and Performance of gRPC-Based Microservices using HTTP/3 and AES-256 Encryption",
          	"Journal of Information Systems Engineering and Management",	"10",	"42s",
            	"519-531",	"2025",	"Scopus",	"NA", "https://www.jisem-journal.com/index.php/journal/article/view/7913"]
      ]  
    }
  },
  {
    title: "Books/ Book Chapters",
    table: {
      headers: ["SR NO", "NAME OF AUTHORS", "CHOOSE APPROPRIATE OPTION", "TITLE OF BOOK", "ISBN NUMBER", "PUBLISHER NAME", "YEAR OF PUBLICATION"],
      rows: [
        ["1",	"Mohammad Arif Ali Usmani and Ausaf Ahmad",	"Book Chapter Published",	
          "An approach to detect the nitrogen deficiency of paddy crop on agriculture farm using digital image processing",	
          "9781041076483",	"CRC Press",	"2025"],
        ["2",	"Saumya Singh, Sumit Yadav, Motashim Rasool, Uvais Ahmad, Fiza Afreen and Fareen",
          	"Book Chapter Published",	"Improving anti-tumour immunity by combining brain immunology and immunotherapy in brain Tumours",	
            "9781041076483",	"CRC Press",	"2025"],
        ["3",	"Syed Adnan Afaq, Mohammad Faisal, Saurabh Srivastava, Tasneem Ahmed, Gausiya Yasmeen, Soni Singh, an",	
          "Book Chapter Published",	"Cyberbullying- Understanding, Preventing, and Addressing Online Harassment",	"9781032526683",	"CRC Press",	"2025"],
        ["4",	"Saurabh Srivastava, Tasneem Ahmed, Nayyar Ali Usmani, Syed Adnan Afaq, and Mohammad Faisal",	"Book Chapter Published",
          	"Cybersecurity Challenges and Countermeasures in Smart Cities for Sustainable Environment Development: A Comprehensive Analysis of Threats and Resilience Strategies",
            	"9781032526683",	"CRC Press",	"2025"]
      ]
    }
  }
];

  return (
    <>
    <PageBanner breadcrumb="Home / Research " />
     <HeroTemplate stats={stats}/>
    <section className="py-14 mt-10 px-6 sm:px-10 md:px-20 lg:px-40 bg-gray-50">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-stretch-50% text-gray-900 mb-6">Research And Development</h2>
        <hr className="border-gray-300 w-20" />
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {/* Thrust Areas */}
        <div  className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(0)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 0 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              Thrust Areas
              <span className="text-gray-500">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 0 && (
            <div className="bg-white px-4 py-3">
              <ul className="list-disc list-inside space-y-6">
                <li>Software Engineering</li>
                <li>Web Technology</li>
                <li>Image Processing</li>
                <li>Machine Learning</li>
                <li>Software & Cyber Security</li>
                <li>Big Data & Cloud Computing</li>
              </ul>
            </div>
          )}
        </div>
       {/* Research Scholars */}
        <div className="border-b border-gray-200">
          <button
              onClick={() => toggleAccordion(1)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 1 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Research Scholars 
              <span className="text-gray-500">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </button>
          {openIndex === 1 && (
            <div className="bg-white px-4 md:px-6 py-3 overflow-x-auto box-border">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th className={thClass}>SR NO</th>
                    <th className={thClass}>ENROLLMENT</th>
                    <th className={thClass}>NAMES</th>
                    <th className={thClass}>MODE</th>
                    <th className={thClass}>RESEARCH TOPIC</th>
                    <th className={thClass}>SUPERVISOR</th>
                    <th className={thClass}>YEAR OF JOINING</th>
                    <th className={thClass}>STATUS</th>
                    <th className={thClass}>CO-SUPERVISOR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>1801001</td>
                    <td className={tdClass}>Al Mustapha Bello</td>
                    <td className={tdClass}>Part Time</td>
                    <td className={tdClass}>
                      An Identification and Mitigation Framework for Cyber Crime: A Nigerian Cyber Law Perspectivee
                    </td>
                    <td className={tdClass}>Dr. Mohammad Faisal</td>
                    <td className={tdClass}>2018</td>
                    <td className={tdClass}>Pursuing</td>
                    <td className={tdClass}>NA</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>1901024</td>
                    <td className={tdClass}>Santosh Kumar</td>
                    <td className={tdClass}>Part Time</td>
                    <td className={tdClass}>
                     Develop a Framework for Digital Privacy in Crowd Sourcing
                    </td>
                    <td className={tdClass}>Dr. Mohammad Faisal</td>
                    <td className={tdClass}>2019</td>
                    <td className={tdClass}>Pursuing</td>
                    <td className={tdClass}>NA</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>1901034</td>
                    <td className={tdClass}>Nadiya Parveen</td>
                    <td className={tdClass}>Full Time</td>
                    <td className={tdClass}>
                       An Efficient Model for Sentiment Analysis and Opinion Mining using Machine Learning
                    </td>
                    <td className={tdClass}>Dr. Mohd. Waris Khan</td>
                    <td className={tdClass}>2019</td>
                    <td className={tdClass}>Pursuing</td>
                    <td className={tdClass}>NA</td>
                  </tr>
                  <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>2001030</td>
                    <td className={tdClass}>S. Zafar Mehdi Kazmir</td>
                    <td className={tdClass}>Full Time</td>
                    <td className={tdClass}>
                     Design and Development of an Efficient Framework for Web Content Mining using Machine Learning
                    </td>
                    <td className={tdClass}>Dr. Md. Faizan Farooqui</td>
                    <td className={tdClass}>2020</td>
                    <td className={tdClass}>Pursuing</td>
                    <td className={tdClass}>NA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* PhDs Awarded */}
        <div className="border-b border-gray-200">
           <button
              onClick={() => toggleAccordion(2)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 2 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               PhDs Awarded 
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
                    <th className={thClass}>ENROLLMENT</th>
                    <th className={thClass}>REGISTRATION</th>
                    <th className={thClass}>YEAR OF JOINING</th>
                    <th className={thClass}>RESEARCH TOPIC</th>
                    <th className={thClass}>SUPERVISOR</th>
                    <th className={thClass}>CO-SUPERVISOR</th>
                    <th className={thClass}>YEAR OF AWARDED</th>
                    <th className={thClass}>FILE URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={tdClass}>1</td>
                    <td className={tdClass}>1901036</td>
                    <td className={tdClass}>Eram Fatima Siddiqui</td>
                    <td className={tdClass}>2019</td>
                    <td className={tdClass}>
                      Development of a framework to Mitigate Vulnerable Latency Junction in IoT
                    </td>
                    <td className={tdClass}>Dr. Tasneem Ahmed</td>
                    <td className={tdClass}></td>
                    <td className={tdClass}>2025</td>
                    <td className={tdClass}>
                      <a href="https://shodhganga.inflibnet.ac.in/handle/10603/634865" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>2</td>
                    <td className={tdClass}>2001208</td>
                    <td className={tdClass}>Md Khalid Jamal</td>
                    <td className={tdClass}>2020</td>
                    <td className={tdClass}>
                      Analysis And Design Multi Objective Workflow Scheduling In Cloud Computing
                    </td>
                    <td className={tdClass}>Dr. Mohammad Faisal</td>
                    <td className={tdClass}></td>
                    <td className={tdClass}>2025</td>
                    <td className={tdClass}>
                      <a href="https://shodhganga.inflibnet.ac.in/handle/10603/634865" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                  <tr>
                    <td className={tdClass}>3</td>
                    <td className={tdClass}>2001140</td>
                    <td className={tdClass}>Abida Khanam</td>
                    <td className={tdClass}>2020</td>
                    <td className={tdClass}>
                      Design and Development of a Blockchain based Framework for Electronic Record Management
                    </td>
                    <td className={tdClass}>Dr. Md. Faizan Farooqui</td>
                    <td className={tdClass}></td>
                    <td className={tdClass}>2024</td>
                    <td className={tdClass}>
                      <a href="https://shodhganga.inflibnet.ac.in/handle/10603/634865" 
                        className="text-[#4f65be] hover:underline hover:text-black cursor-pointer"
                        target="_blank" 
                         rel="noopener noreferrer">
                             View
                       </a>
                      </td>
                  </tr>
                    <tr>
                    <td className={tdClass}>4</td>
                    <td className={tdClass}>1901019</td>
                    <td className={tdClass}>Afroj Alam</td>
                    <td className={tdClass}>2019</td>
                    <td className={tdClass}>
                      An Improved K means Clustering Technique on High Dimensional Data
                    </td>
                    <td className={tdClass}>Dr. Muhammad Kalamuddin Ahmad</td>
                    <td className={tdClass}></td>
                    <td className={tdClass}>2024</td>
                    <td className={tdClass}>
                      <a href="https://shodhganga.inflibnet.ac.in/handle/10603/634865" 
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

        {/* Publications */}
        <div className="border-b border-gray-200">
          <button
              onClick={() => toggleAccordion(3)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-bold
                 text-[#4f65be] text-xl cursor-pointer hover:bg-gray-300 ${
                openIndex === 3 ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
               Publications 
              <span className="text-gray-500">
                {openIndex === 3 ? "−" : "+"}
              </span>
            </button>

          {openIndex === 3 && (
            <div className="bg-white px-4 py-3">
              {/* Sub-dropdowns */}
              <div className="space-y-2">
                {publicationData.map((sub, idx) => (
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
                        {publicationData[idx].table.headers.map((header, i) => (
                       <th key={i} className={thClass}>{header}</th>
                         ))}
                      </tr>
                      </thead>
                     <tbody>
                       {publicationData[idx].table.rows.map((row, rowIndex) => (
                     <tr key={rowIndex}>
                     {row.map((cell, cellIndex) => {
                       const header = publicationData[idx].table.headers[cellIndex];
                       const isLinkColumn = header === "PUBLICATION LINK" || header === "URL";
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
      </div>
    </section>
    </>
  );
};

export default Research;
