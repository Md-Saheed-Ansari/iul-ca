import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";



const DepartmentInfo = () => {
  return (
    <div className="px-6 md:px-30 py-10 bg-white">
      <div className="grid md:grid-cols-2 gap-10 mt-8 items-stretch">
        
        {/* Department Information */}
        <div className="flex flex-col w-full">
          {/* Heading */}
          <h3 className="text-3xl font-medium text-gray-700 mb-6">
            Department Information
          </h3>
          <div className="w-24 h-[1px] bg-gray-300 mb-8"></div>

          {/* Card */}
          <div className="bg-white rounded-lg p-6 shadow-xl flex-1 min-w-0 flex">
            <table className="w-full border border-gray-300 bg-gray-100 text-gray-700
             text-[14px] break-words table-fixed overflow-hidden">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-3 font-medium w-5/12">H.O.D.</td>
                  <td className="py-2 px-3">Prof. (Dr.) Mohammad Faisal</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-3 font-medium">Email</td>
                  <td className="py-2 px-3 break-words">headca@iul.ac.in</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-3 font-medium">Contact (Ext. No.)</td>
                  <td className="py-2 px-3">2111</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-2 px-3 font-medium">Admissions Email</td>
                  <td className="py-2 px-3 break-words">admission@iul.ac.in</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium">Admissions Call</td>
                  <td className="py-2 px-3">+91-9335177775</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col w-full">
          {/* Heading */}
          <h3 className="text-3xl font-medium text-gray-700 mb-6">
            Contact Information
          </h3>
          <div className="w-24 h-[1px] bg-gray-300 mb-8"></div>

          {/* Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:pb-6 flex-1 text-gray-700 text-[14px] min-w-0">
            <p>
              Department of Computer Application, <br />
              1st Floor, Academic Block-I, Integral University, <br />
              Dasauli, Bas-ha Kursi Road, <br />
              Lucknow (U.P.) – 226026
            </p>

           <div className="mt-4">
           <p className="flex items-center gap-2 text-sm mb-2 group cursor-pointer flex-wrap">
              <FaPhoneAlt className="shrink-0 text-[#4f65be] group-hover:text-black" />
               <span className="break-words text-[#4f65be] group-hover:text-black">
                +91 6390011283, 6390011284, 6390011285
              </span>
           </p>
          <p className="flex items-center gap-2 text-sm break-words group cursor-pointer flex-wrap">
            <FaEnvelope className="text-[#4f65be] group-hover:text-black" />
            <span className="text-[#4f65be] group-hover:text-black">info@iul.ac.in</span>
          </p>
        </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/integralunilko/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4f65be] text-white p-2 rounded hover:bg-gray-500">
                <FaFacebookF />
               </a>
               <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4f65be] p-2 text-white rounded hover:bg-gray-500">
                <FaGooglePlusG />
               </a>
               <a href="https://x.com/IntegralUnilko" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4f65be] p-2 text-white rounded hover:bg-gray-500">
                <FaTwitter />
                </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DepartmentInfo;
