import { FaFacebookF, FaGooglePlusG, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#000] text-white mt-10 min-h-[420px]">
      {/* Top Section */}
      <div className="max-w-[1000px] mx-auto pt-28 px-6 py-15 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8">
        
        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-7">CONTACT US</h3>
           <p className="flex items-center gap-2 text-sm mb-2 group cursor-pointer">
              <FaPhoneAlt className="text-white shrink-0 group-hover:text-[#7c7c7c]" />
               <span className="whitespace-nowrap max-[340px]:whitespace-normal group-hover:text-[#7c7c7c]">
                +91 6390011283, 6390011284, 6390011285
              </span>
           </p>
          <p className="flex items-center gap-2 text-sm whitespace-nowrap group cursor-pointer">
            <FaEnvelope className="text-white group-hover:text-[#7c7c7c]" />
            <span className="group-hover:text-[#7c7c7c]">info@iul.ac.in</span>
          </p>
        </div>

        {/* About Us */}
        <div className="">
          <h3 className="font-bold mb-7">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href='/about/overview' onClick={() => window.scrollTo(0, 0)} className="text-[#7c7c7c] hover:text-white hover:underline">Overview</Link></li>
            <li><Link href="/about/vision-mission" onClick={() => window.scrollTo(0, 0)} className="hover:text-white hover:underline text-[#7c7c7c]">Vision & Mission</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-7">USEFUL LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white hover:underline text-[#7c7c7c]">FAQs</a></li>
            <li><a href="https://www.iul.ac.in/ITHD/Home.aspx"
             target="_blank" 
             rel="noopener noreferrer" 
             className="hover:text-white hover:underline text-[#7c7c7c]">Helpdesk</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold mb-9">FOLLOW US</h3>
          <div className="flex space-x-2">
            <a href="https://www.facebook.com/integralunilko/" 
             target="_blank" 
             rel="noopener noreferrer" 
            className="bg-[#4f65be] p-2 rounded hover:bg-gray-500">
              <FaFacebookF />
            </a>
            <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
             target="_blank" 
             rel="noopener noreferrer" 
             className="bg-[#4f65be] p-2 rounded hover:bg-gray-500">
              <FaGooglePlusG />
            </a>
            <a href="https://x.com/IntegralUnilko" 
             target="_blank" 
             rel="noopener noreferrer" 
            className="bg-[#4f65be] p-2 rounded hover:bg-gray-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#333] max-w-[950px] mx-auto mb-8"></div>

      {/* Bottom Section */}
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row justify-between text-[11px] text-gray-400">
        <p className="text-[#7c7c7c]">
          Copyright © <a href="https://www.iul.ac.in/"
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-[#4f65be] hover:underline hover:text-white">Integral University</a>
        </p>
        <p className="text-[#7c7c7c] max-[768px]:pt-5 max-[768px]:mb-5">
          Designed & Developed By:{" "}
          <a href="https://www.iul.ac.in/404.html?aspxerrorpath=/sdc/default.aspx"
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-yellow-300 hover:underline">
            Software Development Cell
          </a>
        </p>
      </div>
    </footer>
  );
}
