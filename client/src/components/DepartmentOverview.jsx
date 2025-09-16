import React from "react"
import Img from '../assets/member.jpg'

const DepartmentOverview = () => {
  return (
    <div className="w-full h-full px-6 sm:px-10 lg:px-12 py-20">
    <div className="max-w-[900px] mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        Department Overview
      </h2>

      {/* Card + Right Text */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Card Left */}
        <div className="bg-white shadow-lg rounded-sm hover:shadow-2xl overflow-hidden p-6 flex flex-col items-center h-96 max-[768px]:h-auto">
          <div className="flex flex-col items-center">
            <img
              src={Img} // replace with actual image
              alt="HOD"
              className="w-50 h-52 max-[360px]:w-30 max-[360px]:h-40 object-cover rounded-md border-2 border-indigo-500"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 max-[360px]:text-[16px]">
                Prof. (Dr.) Mohammad Faisal
              </h3>
              <p className="font-bold text-gray-700 max-[360px]:text-[13px]">
                (Head of Department)
              </p>
              <p className="text-sm text-gray-600 mt-2 max-[360px]:text-[12px]">
                <span className="font-bold">Email:</span>{" "}
                mdfaisal@iul.ac.in / headca@iul.ac.in
              </p>
              <p className="text-sm text-gray-600 max-[360px]:text-[12px]">
                <span className="font-bold">Contact:</span> 9984171083
              </p>
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="text-gray-700 leading-normal text-justify text-[14px]">
          <h3 className="font-bold mb-5">
            Welcome to the Department of Computer Application of Integral University.
          </h3>
          <p className="mb-4">
            The Department was established in 2003 and is one of the most reputed academic departments in the field of Computer Application. 
            The curriculum of this department is addressed to the students who wish to be distinguished as Software Developer, 
            Computer System Analyst, Software Engineer, Software Application Architect, Hardware Engineer, Software Consultant, 
            Database Administrator in the private and public sector. You can become part of this highly competitive and futuristic 
            environment by enrolling for one of our exciting programs. The Department offers a 6 semester Bachelor program in
             Computer Application (BCA), 4 semester Master program in Computer Application. The combination of a dynamic and innovative 
             curriculum that takes advantage of the latest technologies, with the experienced faculties of the Department, 
             creates a fertile ground for the effective dissemination of knowledge and the development of the necessary skills for 
             future professional recognition of the Department's students.
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-5 text-gray-700 text-[14px] text-justify leading-normal">
        <p>
          The Department promotes research advancements by offering doctoral program, contributing in the creation of future 
          researchers and powerful academicians. The thrust areas offered by the Department are Big Data Analytics, 
          Cloud Computing, Image Processing, Web Engineering, and Software Engineering. The department has dedicated staff who, 
          through on-going research, keeps abreast of new developments in respective fields of study. Our staffs are very active 
          researchers, publishing widely in international and local accredited journals, presenting many papers at conferences 
          and producing many other research outputs of high international standard. The department continues to build on a tradition 
          of excellence and innovation in research, teaching, and service to create a vibrant community of faculty, graduate students, 
          and undergraduate students that are ready to make a difference in the world. I invite you to look over these webpages and 
          learn more about the opportunities the Department of Computer Application offers our undergraduate and graduate students.
        </p>
      </div>
    </div>
    </div>
  );
};

export default DepartmentOverview;
