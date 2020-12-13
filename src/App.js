import "./App.css";
import { Header } from "./components/Header";
import { Paper } from "@material-ui/core";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
import ShowInstrucion from "./components/ShowInstrunction";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <Paper className="container">
        <ShowInstrucion />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Paper>
    </GlobalProvider>
  );
}

export default App;
