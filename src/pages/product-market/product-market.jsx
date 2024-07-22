import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductData } from "../../data/data-production";

export const ProductSingle = () => {
  const { id } = useParams();
  const data = ProductData.find((item) => item.id == id);

  if (!data) {
    return <p>Product not found</p>;
  }

  const topProducts = ProductData.slice(0, 8);

  return (
    <div className="container">
      <div className="mx-auto flex justify-between pb-[140px]">
        <div>
          <img className="h-auto w-[600px]" src={data.img} alt={data.name} />
        </div>
        <div className="w-[670px]">
          <h1 className="mb-[9px] w-[275px] text-[40px] font-semibold text-[#ffffff]">
            {data.name}
          </h1>
          <div className="mb-[40px] flex items-center gap-4">
            <p className="rounded-[8px] bg-[#f91b1b] pb-[6px] pl-[15px] pr-[15px] pt-[6px] text-lg font-semibold text-white">
              -20% . {data.currentPrice}
            </p>
            {data.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${data.originalPrice}
              </p>
            )}
          </div>
          <div>
            <img
              className="mb-[25px] cursor-pointer"
              src="/Product-razmer.png"
              alt="img"
            />
          </div>
          <ul className="mb-[40px] flex items-center gap-4">
            <li>
              <button className="rounded-[30px] border-[3px] border-[#f1c25f] pb-[20px] pl-[65px] pr-[65px] pt-[20px] text-[16px] font-[500] text-[#f1c25f]">
                add to cart
              </button>
            </li>
            <li>
              <button className="rounded-[30px] border-[3px] bg-[#f1c25f] pb-[20px] pl-[75px] pr-[75px] pt-[20px] text-[16px] font-[500]">
                BUY NOW
              </button>
            </li>
          </ul>
          <div className="rounded-[15px] bg-[#191919] pb-[40px] pl-[15px] pr-[35px] pt-[16px]">
            <div className="mb-[8px] flex items-center gap-4">
              <button className="rounded-[8px] bg-[#262626] pb-[8px] pl-[16px] pr-[16px] pt-[8px] text-[#ccc]">
                About
              </button>
              <p className="cursor-pointer text-[14px] font-[700px] text-white">
                Delivery
              </p>
            </div>
            <p className="text-[14px] font-[400px] text-[#999]">
              Adidas YEZZEY 700 Akula terisidan qilingan.Yurish juda qulay
              kiysiz ozi yuradi Tunda Yonadi. Siz kutgan krossovkalar. Jigarrang
              va bej rangli teridan ishlangan, Adidas kompaniyasining Forum
              Buckle Low krossovkalari tasodifiy past shipli siluet bilan
              qulaylik o'rtasida to'g'ri ko'prikdir.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-[140px]">
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topProducts.map((item) => (
            <Link to={`/products/ProductSingle/${item.id}`} key={item.id}>
              <div className="rounded-[20px] border-[3px] bg-[#ffffff] shadow transition-shadow duration-300 hover:shadow-lg">
                <h1 className="mb-[20px] w-[80px] rounded-lg bg-[#274c5b] text-center text-[15px] font-semibold text-white">
                  {item.category}
                </h1>
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-[25px] object-cover pl-[27px] pr-[27px] pt-[27px]"
                />
                <div className="bg-[#f5f5f5] pl-[20px] pt-[20px]">
                  <h1 className="mb-[12px] w-[150px] text-[16px] font-[700px] text-[#0d0d0d]">
                    {item.name}
                  </h1>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="mb-[30px] flex items-center gap-2">
                      <p className="text-lg font-semibold text-[#f00]">
                        ${item.currentPrice}
                      </p>
                      {item.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">
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