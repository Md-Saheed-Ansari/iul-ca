import React from "react";

const AlumniCardTemplate = ({ name, designation, organization, image}) => {

  const imageUrl = image?.startsWith("http")
    ? image
    : `${import.meta.env.VITE_BACKEND_URL}${image || "/uploads/default.jpg"}`;

  return (
    <div className="bg-white rounded-sm shadow-xl hover:shadow-2xl p-7 w-full max-w-[360px] 
    min-h-[420px] md:min-h-[420px] h-auto flex flex-col mx-auto">
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
        <h3 className="text-[18px] font-bold text-[#4f65be] mb-2">{name}</h3>

        {designation && (
           <p className="text-sm text-gray-700 mb-2">
          <span className="font-bold">Designation:</span> {designation}
        </p>
        )}
        {organization && (
          <p className="text-sm text-gray-700 mb-2">
          <span className="font-bold">Organization:</span> {organization}
        </p>
        )}
      </div>
    </div>
  );
};

export default AlumniCardTemplate;
