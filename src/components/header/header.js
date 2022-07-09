import React from "react";
import img from "../../assets/git.png";
const Header = () => {
  return (
    <>
      <div className="h-14 flex  bg-black ">
        <div className="text-3xl text-white flex items-center mx-auto">
          Expense Tracker
        </div>
        <a href="">
          <img src={img} className="w-14 flex justify-items-end" />
        </a>
      </div>
    </>
  );
};

export default Header;
