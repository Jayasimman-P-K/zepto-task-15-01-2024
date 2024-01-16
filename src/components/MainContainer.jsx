import React from "react";
import InputBox from "./InputBox";

const MainContainer = () => {
  return (
    <div className="h-96 w-4/6 bg-neutral-100 p-4 border-b-[3px] border-neutral-300 relative">
      <InputBox />
      <div className="absolute bottom-0 text-lg text-neutral-500 font-semibold w-full flex justify-between pr-8 p-2">
        <p>JAYASIMMAN P K</p>
        <p>jayasi58460@gmail.com</p>
      </div>
    </div>
  );
};

export default MainContainer;
// bg-neutral-100 border-2 border-blue-400
