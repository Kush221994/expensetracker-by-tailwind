import React from "react";

const Transaction = ({ name, amount, tname, tamount, tadd }) => {
  return (
    <div className="w-1/2 ml-4">
      <h5 className="text-3xl flex justify-center mx-auto border-b-2 border-black">
        Add New Transaction
      </h5>
      <div className="flex flex-col">
        <div>
          <label className="mb-2 text-xl flex flex-col">Text</label>
          <input
            className="p-2 border-2 border-white rounded-md mb-3"
            type="text"
            placeholder="Enter text..."
            value={name}
            onChange={tname}
          />
        </div>
        <div>
          <label className="mb-2 text-xl flex flex-col">
            Amount (negative-expense, positive-income)
          </label>

          <input
            className="p-2 border-2 border-white rounded-md mb-3"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={tamount}
          />
        </div>

        <button
          className="w-1/2 h-10 bg-blue-600 rounded-md font-bold hover: cursor-pointer"
          onClick={tadd}
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default Transaction;
