import React from "react";

export const NoteFound = () => {
  return (
    <div className="container pb-[80px]">
      <div className="container flex h-screen flex-col items-center justify-center rounded-md bg-[#ffffff]">
        <h1 className="text-primary mb-8 animate-bounce text-6xl font-extrabold tracking-wider">
          Page Not Found !!
        </h1>
        <img
          className="w-1/2"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="not found"
        />
      </div>
    </div>
  );
};