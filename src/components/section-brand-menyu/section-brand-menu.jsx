import React from "react";

export const Menu = () => {
  return (
    <div className="pb-[80px]">
      <div className="mx-auto py-10">
        <h1 className="text-transform: uppercase; mb-[16px] text-[16px] font-[500px] text-[#999]">
          ALL MENU
        </h1>
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <img
              className="w-full rounded-lg shadow-md"
              src="/Section2-img.png"
              alt="img"
            />
          </li>
          <li>
            <img
              className="h-auto w-full rounded-lg shadow-md"
              src="/Section3-img.png"
              alt="img"
            />
          </li>
          <li>
            <img
              className="mt-[-100px] h-[350px] w-full rounded-lg shadow-md"
              src="/Section1-img.png"
              alt="img"
            />
          </li>
          <li>
            <img
              className="w-full rounded-lg shadow-md"
              src="/Section4-img.png"
              alt="img"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};