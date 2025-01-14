
import React from "react";
import Slidebar from "../components/Slidebar";
import Dropzone from "../components/Dropzone";

const Builder = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-200">
        <Slidebar />
      </div>
      <div className="flex-grow h-screen">
        <Dropzone />
      </div>
    </div>
  );
};

export default Builder;
