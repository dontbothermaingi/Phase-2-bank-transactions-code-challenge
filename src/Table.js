import React, { useState, useEffect } from "react";

function Table({ transactions, filteredCategory }) {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(()=>{
    if(filteredCategory === "All"){
      setFilteredTransactions(transactions)
    }else{
      const filtered = transactions.filter((transaction)=>transaction.category === filteredCategory);
      setFilteredTransactions(filtered)
    }
  },[transactions,filteredCategory])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;