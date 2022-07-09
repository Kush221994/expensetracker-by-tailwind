import React from "react";

const Balance = ({ tamount, tincome, texpense }) => {
  return (
    <>
      <div className="w-1/4 h-fit mx-auto flex flex-col mt-4">
        <div className="text-3xl border-b-2 border-black font-bold">
          Your Balance:
        </div>
        <div className="flex text-xl">Rs.{tamount}</div>
        <div className="flex justify-between text-3xl bg-white ">
          <div className="flex flex-col m-5">
            Income
            <div>Rs.{tincome}</div>
          </div>
          <div className="flex flex-col m-5">
            Expenses
            <div>Rs.{texpense}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
