import React from "react";
import img from "../../assets/git.png";
const Header = () => {
  return (
    <>
      <div className="h-14 flex  bg-black ">
        <div className="text-3xl text-white flex items-center mx-auto">
          Expense Tracker
        </div>
        <a
          href="https://github.com/Kush221994/expensetracker-by-tailwind"
          target="_blank"
        >
          <img src={img} className="w-14 flex justify-items-end" />
        </a>
      </div>
    </>
  );
};

export default Header;
