import React from "react";
import { ProductData } from "../../data/data-production";
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <div className="mx-auto pb-[140px]">
        <h1 className="text-transform: uppercase; mb-[16px] text-[16px] font-[500px] text-[#999]">
          NEWS PRODUCT
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ProductData.slice(0, 8).map((item) => (
            <Link to={`/products/ProductSingle/${item.id}`} key={item.id}>
              <div className="w-300 rounded-[20px] border-[3px] bg-[#ffffff]">
                <img
                  src={item.img}
                  alt="img"
                  className="mb-[40px] pl-[25px] pr-[25px]"
                />
                <div className="bg-[#f5f5f5] pl-[20px] pt-4">
                  <h1 className="w-[150px] text-[16px] font-[700px] text-[#0d0d0d]">
                    {item.name}
                  </h1>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="mb-[30px] flex items-center gap-2">
                      <p className="text-[16px] font-[600px] text-[#f00]">
                        ${item.currentPrice}
                      </p>
                      {item.originalPrice && (
                        <p className="text-[12px] font-[400px] text-[#666]">
                          ${item.originalPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};