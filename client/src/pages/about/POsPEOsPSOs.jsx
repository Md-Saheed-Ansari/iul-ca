import React, { useState, useEffect } from "react";
import PageBanner from "../../components/PageBanner";
import DepartmentInfo from "../../components/DepartmentInfo";
import HeroTemplate from "./HeroTemplate"

const POsPEOsPSOs = () => {

  const [stats, setStats] = useState({ programs: 0, teachers: 0, research: 0 });
      
           useEffect(() => {
              setTimeout(() => {
                setStats({ programs: 3, teachers: 56, research: 43 });
              }, 1000);
            }, []);

  return (
    <>
    <PageBanner breadcrumb="Home / About / PO's & PEO's & PSO's" />
    <HeroTemplate stats={stats}/>
    <div className="w-full bg-white">
    <div className="text-gray-800 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20 min-[768px]:mt-10">
      <div className="-mt-7">

        {/* BCA */}

        <h2 className="text-[25px] justify-center text-center font-bold underline mb-1 ">Bachelor of Computer Application</h2>
        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Educational Objectives (PEO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           To acquaint students about principles of system analysis, design, development and project management.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            To impact knowledge about various sub domains related to the field of computer science and applications.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
           To apply IT practices to model and analyze the real life problems and interpret the results.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            To impact knowledge about various sub domains related to the field of computer science and applications.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
        </ul>

        {/* PO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Outcomes (PO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           Ability to demonstrate knowledge of Computer science and its applications in order to enhance basic understanding of various
            software technologies.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Ability to analyze and identify various business and technical problems to further solve problems with effective communication.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
           Ability to adapt analytical, logical and managerial skills with the technical aspects in order to design and deploy 
           reliable software programs and application for real world problems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Ability to investigate complex problems and provide computer-based solutions.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           Ability to understand and deliver ethical, social and cultural responsibilities in professional environment as an individual and team.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Ability to adapt new technologies for upgrading their skills and contributing to a lifelong learning.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
           Ability to create and manage multidisciplinary projects and successfully apply software and project management principles.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           Ability to become employable in a variety of IT companies and government sector and also seek entrepreneurship
            opportunities for the betterment of an individual and society at large.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
        </ul>

          {/* PSO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Specific Outcome (PSO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           Attain the ability to design and develop Computer Applications, evaluate and recognize potential skills 
           and provide innovative solutions.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Explore technical knowledge in diverse areas of Computer Applications an experience and environment conducive in 
            cultivating skills for successful career, entrepreneurship and higher studies.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
          </ul>

        {/*MCA*/}

         <h2 className="text-[25px] justify-center text-center font-bold underline mb-1 ">Master of Computer Application</h2>
        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Educational Objectives (PEO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           To enhance foundation of mathematics, computer application and problem solving methodology for effective
            implementation in the area of s/w development.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            To effectively design, implement, improve, and manage the integrated socio-technical systems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
           To inculcate effective communication skills combined with professional & ethical attitude.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            To gain multidisciplinary knowledge through real time projects and industry internship training and providing a sustainable
             competitive edge in R&D and meeting industry needs.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
        </ul>

        {/* PO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Outcomes (PO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           <span className="font-bold">Computational knowledge :</span> Acquire knowledge of
            Computing Fundamentals, Basic Mathematics, Computing Specialization and 
           Domain Knowledge of proper computing models from defined problems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Problem analysis :</span> Identify, formulate review research
           literate and analyze complex engineering problems reading substantiated conclusions using first
            principles mathematics, computing science and relevant domains.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Design/development of solutions :</span> Ability to design system s/w or 
          process as per needs and specifications.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           <span className="font-bold">Conduct investigations of complex computing problems :</span> Use research-based knowledge 
           and research methods including design of experiments, analysis & interpretation of data & synthesis of information to
            provide valid conclusions.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Modern Tool Usage :</span> Ability to demonstrate skills to use modern s/w & h/w tools to analyze
           problems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Professional Ethics :</span> Apply ethical principles and commit to professional ethics and cyber 
          regulations.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Life-Long Learning :</span> Ability to develop confidence for self-education and life-long
           learning in the broadest context of technological change.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Project management and finance :</span>Ability to demonstrate knowledge & understanding
           of the engineering and management principles and apply them as a member & as a leader in a team to manage multidisciplinary projects.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           <span className="font-bold">Communication Efficacy :</span> Ability to communicate effectively in both verbal and written form.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Societal and Environmental Concern:</span> Ability to understand the impact of IT
           solutions in a global and societal context.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Innovations and entrepreneurship :</span> Find out right opportunity for entrepreneurship and
           create odd value for the betterment of an individual and society at large
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
        </ul>

        {/* PSO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Specific Outcome (PSO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           Understand the concepts and application in the field of Computing Sciences like Web designing & development, 
           mobile application development and Network & Communication technologies25
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Ability to test & analyze the quality of various sub-systems and to integrate them in order to evolve a larger computing system.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
          </ul>

          {/* PO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Outcomes (PO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
            <p>Upon the completion of this Programme the learners will be able to understand, appreciate, 
                employ, design and implement appropriate security technologies and policies to protect computers, 
                digital information and Internet Transactions. The major Programme Outcome (PO) for PGDCSL are as follows:</p>
            <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           <span className="font-bold">Computational knowledge :</span> Attain the knowledge of network fundamentals,
           computing specialization and domain understanding to formulate related problems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Problem analysis :</span> Identify, express and analyse complex security related aspects
           within the domains of computer centric activities.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Design/development of solutions :</span> Ability and skill development to design secure system software
           or process as per specific guidelines.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           <span className="font-bold">Conduct investigations of complex computing problems :</span> Use research and case-based knowledge 
           and research methods including design of experiments, analysis & interpretation of data & synthesis of information to provide 
           valid conclusion.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Modern Tool Usage :</span>  Ability to demonstrate skills to use modern and secure software and
           hardware tools and techniques to analyse the problems.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Professional Ethics :</span>  Ability to apply standard guidelines and ethical principles for better
           execution of professional ethics and cyber regulations.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Life-Long Learning :</span> Ability to develop confidence for self-education and life-long learning in
           the broadest context of technological changes on digital platforme.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Project management and finance :</span> Ability to demonstrate the knowledge & understanding of
           the cyber space activities, cyber-crime and related Laws and principles for applying the same as a member & as a leader in
            a team to execute and manage security related projects.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
           <span className="font-bold">Communication Efficacy :</span>  Ability to communicate effective awareness related to 
           cyber-crime and cyber security in both means verbal and written form.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
           <li>
          <span className="font-bold">Societal and Environmental Concern:</span>  Ability to understand the impact of technological 
          solutions for computer related and computer-oriented crime in a global and societal context.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
          <span className="font-bold">Innovations and entrepreneurship :</span>  Find out right opportunity for entrepreneurship
           and create odd value for the betterment of an individual and society at large.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4 mb-4"></div>
        </ul>

             {/* PSO */}

        <p className="text-[20px] text-gray-400 leading-relaxed mb-6 max-[480px]:text-[15px]">
          Programme Specific Outcome (PSO)
        </p>
        <ul className="list-disc list-outside pl-6 mt-3 space-y-2 text-[17px] leading-relaxed">
          <li>
           Understand the fundamental concepts and applications in the field of cyber-crime and cyber security particularly
            Digital India Initiative, Data and Information Protection, Digital Forensic and Investigation, Data Acquisition 
            and Control and Mobile Technologies.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          <li>
            Ability to test & analyse the quality of various Network, Legal, Ethical and cyber security aspects and make it
             easy to deliver a collaborative notion for better education and awareness.
          </li>
          <div className="w-225 h-[1px] bg-gray-300 mt-4"></div>
          </ul>
      </div>
    </div>
    </div>
    <DepartmentInfo/>
    </>
  );
};

export default POsPEOsPSOs;
