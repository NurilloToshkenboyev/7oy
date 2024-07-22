import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="pb-20 w-[1360px] ml-auto mr-auto">
      <div className="container mt-5 flex items-center justify-between rounded-lg bg-gray-300 p-5 shadow-lg">
        <img src="/Header-img_logo.png" alt="logo" className="h-10 w-auto" />
        <nav>
          <ul className="mr-[600px] flex items-center gap-8">
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/women"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/sale"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/children"
              >
                Children
              </Link>
            </li>
            <li>
              <Link
                className="text-lg font-bold text-gray-900 transition duration-300 hover:text-blue-500"
                to="/collection"
              >
                Collection
              </Link>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2">
            <p className="cursor-pointer text-sm font-medium transition duration-300 hover:text-blue-500">
              English
            </p>
            <img src="/header.svg" alt="icon" className="h-4 w-4" />
          </li>
          <li className="ml-10">
            <img
              className="cursor-pointer transition duration-300 hover:scale-110"
              src="/header-menu.svg"
              alt="icon"
            />
          </li>
          <li>
            <img
              className="cursor-pointer transition duration-300 hover:scale-110"
              src="/header-like.svg"
              alt="icon"
            />
          </li>
          <li>
            <img
              className="cursor-pointer transition duration-300 hover:scale-110"
              src="/header-savatcha.svg"
              alt="icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};