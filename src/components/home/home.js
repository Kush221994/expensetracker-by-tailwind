import React, { useState } from "react";
import Header from "../header/header";
import Balance from "../balance/balance";
import History from "../history/history";
import Transaction from "../transaction/transaction";
const Home = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [totalamt, setTotalamt] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = () => {
    const amountint = parseInt(amount);
    if (amount < 0) {
      setExpense(amountint + expense);
      setTotalamt(totalamt + amountint);
    }
    if (amount > 0) {
      setIncome(amountint + income);
      setTotalamt(totalamt + amountint);
    }
    //if it is of type is string convert it into integers (parseInt)
    setHistory((previousState) => [
      ...previousState,
      {
        id: history.length + 1,
        name: name,
        amount: amount,
      },
    ]); //{} represents an json object
    setName("");
    setAmount("");
  };
  const deleteHandler = (id) => {
    const deletedtransaction = history.find(
      (transaction) => transaction.id === id
    );
    const amountint = parseInt(deletedtransaction.amount);
    console.log(deletedtransaction);
    if (amountint < 0) {
      setExpense(amountint - expense);
      setTotalamt(totalamt - amountint);
    }
    if (amountint > 0) {
      setIncome(amountint - income);
      setTotalamt(totalamt - amountint);
    }

    setHistory(history.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="w-full h-fit bg-gray-400 mx-auto flex flex-col">
        <Header />
        <Balance
          tamount={totalamt}
          tincome={income}
          texpense={Math.abs(expense)}
        />
        <History tdelete={deleteHandler} thistory={history} />
        <Transaction
          name={name}
          amount={amount}
          tname={nameHandler}
          tamount={amountHandler}
          tadd={submitHandler}
        />
      </div>
    </>
  );
};

export default Home;
