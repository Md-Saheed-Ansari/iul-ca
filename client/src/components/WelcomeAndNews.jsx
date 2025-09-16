import React, { useEffect, useState } from "react";
import axios from "axios";
import hodImage from "../assets/member.jpg"; // replace with your actual image

const WelcomeAndNews = () => {

 const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/news`);
        setNews(res.data);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);


  return (
    <div className="w-full py-12 bg-gray-50 mt-10 mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 px-8">
        {/* Left Column - Welcome */}
<div className="w-full max-[480px]:mt-8">
  <h2 className="text-3xl font-semibold mb-6">Welcome</h2>

  {/* Wrapper for text + image card */}
  <div className="text-sm text-gray-700 leading-relaxed relative">
    {/* HOD Card (floated left) */}
    <div className="bg-white shadow-md rounded-sm p-4 w-44 text-center max-[450px]:w-full
     max-[450px]:float-none max-[450px]:mx-auto float-left mr-4 mb-2">
      <img
        src={hodImage}
        alt="HOD"
        className="w-28 h-35 object-cover mx-auto border rounded-md"
      />
      <p className="text-[#4f65be] font-semibold mt-4 text-sm">
        Prof. (Dr.) Mohammad Faisal
      </p>
      <p className="text-gray-600 text-xs">(HOD)</p>
    </div>

    {/* Welcome Text (wraps around card) */}
      <p className="font-bold">
        Welcome to the Department of Computer Application of Integral University.
      </p> <br/>
      <p className="leading-normal text-justify">
      The Department was established in 2003 and is one of the most reputed
      academic departments in the field of Computer Application. The curriculum
      of this department is addressed to the students who wish to be
      distinguished as Software Developer, Computer System Analyst, Software
      Engineer, Software Application Architect, Hardware Engineer, Software
      Consultant, Database Administrator in the private and public sector. You
      can become part of this highly competitive and futuristic environment by
      enrolling for one of our exciting programs. The Department offers a 6
      semester Bachelor program in Computer Application (BCA), 4 semester Master
      program in Computer Application. The combination of a dynamic and
      innovative curriculum that takes advantage of the latest technologies,
      with the experienced faculties of the Department, creates a fertile ground
      for the effective dissemination of knowledge and the development of the
      necessary skills for future professional recognition of the Department's
      students.
    </p>

    {/* Learn More link */}
    <a
      href="/about/overview"
      className="text-[#4f65be] mt-3 inline-block font-medium clear-both"
    >
      Learn more →
    </a>
  </div>
</div>


        {/* Right Column - News & Announcements */}
        <div className="w-full max-[899px]:mt-10">
          <h2 className="text-2xl font-semibold mb-6">News & Announcement
            <div className="w-23 h-0.5 bg-gray-300 mt-6 rounded"></div>
          </h2>

           {loading && <p className="p-4">Loading...</p>}
          {error && <p className="p-4 text-red-600">{error}</p>}

          {!loading && !error && (
            <div className="p-4 h-98 overflow-y-auto">
              {news.map((item) => (
                <div key={item._id} className="border-b border-gray-300 last:border-b-0 py-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString("en-GB")} {/* dd/mm/yyyy */}
                  </p>
                  <a href={item.link} className="text-[#4f65be] hover:underline text-sm" target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeAndNews;
