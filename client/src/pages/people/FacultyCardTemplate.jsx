import React from "react";

const FacultyCardTemplate = ({ name, designation, email, expertise, subjects, image, url}) => {

   // If image is relative (like /uploads/h1.jpg), prefix with backend URL
  const imageUrl = image?.startsWith("http")
    ? image
    : `${import.meta.env.VITE_BACKEND_URL}${image || "/uploads/default.jpg"}`;

  return (
    <div className="bg-white rounded-sm shadow-xl hover:shadow-2xl p-7 w-full max-w-[360px] 
    min-h-[560px] md:min-h-[560px] h-auto flex flex-col mx-auto">
      {/* Image centered */}
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-38 h-40 rounded-md object-cover border-2 border-[#4f65be]"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-[18px] font-bold text-gray-900">{name}</h3>
        <p className="text-[13px] font-bold text-gray-600 mb-3">{designation}</p>

        {email && (
          <p className="text-sm text-gray-700 mb-1">
          <span className="font-bold">Email:</span> {email}
        </p>
        )}
        {expertise && (
          <p className="text-sm text-gray-700 mb-1">
          <span className="font-bold">Area of Expertise:</span> {expertise}
        </p>
        )}
        {subjects && (
           <p className="text-sm text-gray-700">
          <span className="font-bold">Subjects Taught:</span> {subjects}
        </p>
        )}
      </div>

      {/* Button of unique url aligned left */}
      {url && (
        <a href={url}
       target="_blank" 
       rel="noopener noreferrer"
       className="mt-4 px-7 py-1 border border-black text-[#4f65be] text-[14px] cursor-pointer hover:underline hover:text-black
       transition self-start font-semibold">
        Read more
      </a>
      )}
    </div>
  );
};

export default FacultyCardTemplate;
