import React, { useEffect, useState } from "react";
import axios from "axios"
import { FaRegCalendar } from "react-icons/fa";

const EventsSection = () => {


  const API_BASE = `${import.meta.env.VITE_BACKEND_URL}` // backend URL

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/events`);
        setEvents(res.data);
      } catch (err) {
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="px-6 py-18">
      {/* Heading Section (aligned with cards) */}
      <div className="mb-10 max-w-[950px] mx-auto">
        <h2 className="text-[32px] font-semibold text-gray-800 font-sans uppercase">
          Integral Events
        </h2>
        <p className="text-gray-300 mt-1 text-[19px]">Upcoming. Interesting. Engaging.</p>
        <div className="w-25 h-0.5 bg-gray-300 mt-6 rounded"></div>
      </div>

      {loading && <p className="text-center">Loading events...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Events List */}
      <div className="space-y-6">
        {events.map((event,index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-md rounded-sm overflow-hidden hover:shadow-xl max-w-[950px] mx-auto"
          >
            {/* Image with overlay date */}
            <div className="md:w-1/3 relative flex cursor-pointer items-center justify-center">
             <img
                src={`${API_BASE}${event.image}`}
                alt={event.title}
                className="w-full h-full max-[768px]:h-[150px] object-cover"
              />
             {/* Date Overlay */}
            <div className="absolute bottom-4 text-4xl max-[768px]:left-4 flex justify-center">
              <span className="text-white font-bold drop-shadow-lg">
                   {new Date(event.startDate).toLocaleDateString("en-GB")}
               </span>
            </div>
         </div>

            {/* Content */}
            <div className="p-6 ml-6 md:w-2/3 flex flex-col justify-between">
             <p className="flex items-center gap-2 text-sm text-gray-400 mb-2">
               <FaRegCalendar className="shrink-0 text-gray-400" />
                  {event.date}
             </p>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-[#4f65be] cursor-pointer mb-4">
                {event.title}
              </h3>
              <a
                href={event.link}
                className="self-start px-7 py-3 text-[11px] bg-[#4f65be] text-white uppercase rounded-sm shadow
                 hover:bg-black transition">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
