import React from "react";

const History = ({ tdelete, thistory }) => {
  return (
    <>
      <div className="w-1/4 h-fit mt-4 flex flex-col mx-auto">
        <div className="border-b-2 border-black text-3xl">History</div>

        <div>
          {thistory.map((item) => {
            return (
              <div key={item.id}>
                <div className="mt-2  flex justify-between text-xl">
                  <div> {item.name}</div>
                  <div>{item.amount}</div>
                  <button
                    className=" bg-red-600 w-5 h-7"
                    onClick={() => tdelete(item.id)}
                  >
                    {" "}
                    X
                  </button>
                </div>
                {/* //IF U WANT TO PASS ANYTHING WE HAVE TO START AN AROOW FUNCTION */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default History;
