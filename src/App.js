
import './App.css';
import Table from './Table';
import TRANSACTIONS from './db.json';
import Filter from './Filter';
import Form from './Form';
import { useState } from 'react';


function App() {
  const [transactions, setTransactions] = useState(TRANSACTIONS.transactions);
  const [filteredCategory, setFilteredCategory] = useState("All");

  function handleCategoryChange(category){
    setFilteredCategory(category)
  }

  function handleTransactionFormSubmit(newTransaction){
    setTransactions([...transactions,newTransaction])
  };

  return (
    <div className="App">
      <Form onTransactionFormSubmit={handleTransactionFormSubmit} />
      <Filter
        transactions={transactions}
        onFilteredFormDate={handleCategoryChange}
      />
      <Table transactions={transactions} filteredCategory={filteredCategory} />
    </div>
  );
}

export default App;
