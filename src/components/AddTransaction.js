import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TextField } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = React.useState("expense");

  const handleTransactionType = (event, newType) => {
    if (newType) {
      setTransactionType(newType);
    }
  };

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text, //same as text: text
      amount: +amount * (transactionType === "expense" ? -1 : 1), // + will convert this to number. easy way
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <TextField
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            required={true}
            InputProps={{ inputProps: { minLength: 3 } }}
            label="Description of transaction"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            label="Enter amount"
            variant="outlined"
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
          />
        </div>{" "}
        <ToggleButtonGroup
          value={transactionType}
          exclusive
          fullWidth
          onChange={handleTransactionType}
          aria-label="type of transaction"
        >
          <ToggleButton value="income" aria-label="left aligned">
            Income
          </ToggleButton>

          <ToggleButton value="expense" aria-label="right aligned">
            Expense
          </ToggleButton>
        </ToggleButtonGroup>
        <div></div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
