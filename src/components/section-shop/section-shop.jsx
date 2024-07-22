import React from "react";

export const Shop = () => {
  return (
    <div>
      <div className="pb-[80px]">
        <h1 className="text-transform: uppercase; mb-[16px] text-[16px] font-[500px] text-[#999]">
          NEWS PRODUCT
        </h1>
        <ul className="flex justify-between">
          <li className="w-[370px]">
            <h1 className="mb-[20px] text-[36px] font-[700] text-[#fafafa]">
              We have new products
            </h1>
            <button className="flex items-center gap-[15px] rounded-[30px] bg-[#F1C25F] pb-[13px] pl-[40px] pr-[60px] pt-[13px] text-[16px] font-[500] text-[#000000]">
              <p>SEE ALI</p>
              <img src="/Section-2-icon.png" alt="icon" />
            </button>
          </li>
          <li>
            <img src="/Section-2-img.png" alt="img" />
          </li>
        </ul>
      </div>
    </div>
  );
};