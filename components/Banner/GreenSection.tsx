import React from "react";

const GreenSection = ({ text }: { text: string }) => {
  return (
    <div className="text-center  mx-auto mb-8">
      <div className="bg-[#4a7a4a] text-white p-6 rounded-lg shadow-lg mb-8">
        <p className="text-2xl leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default GreenSection;
