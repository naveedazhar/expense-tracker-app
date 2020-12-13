import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Box } from "@material-ui/core";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  console.log(amounts);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Box p={1}>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </Box>
  );
};
