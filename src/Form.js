import {React, useState} from "react";

function Form({ onTransactionFormSubmit }) {
    const [selectDate, setSelectDate] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newAmount, setNewAmount] = useState("");
  
    function handleDate(event) {
      setSelectDate(event.target.value);
    }
  
    function handleDescription(event) {
      setNewDescription(event.target.value);
    }
  
    function handleCategory(event) {
      setNewCategory(event.target.value);
    }
  
    function handleAmount(event) {
      setNewAmount(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const newTransaction = {
        date: selectDate,
        description: newDescription,
        category: newCategory, 
        amount: newAmount, 
      };
  
      onTransactionFormSubmit(newTransaction);
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="date" value={selectDate} onChange={handleDate} />
          <input
            type="text"
            value={newDescription}
            onChange={handleDescription}
            placeholder="Description"
          />
          <input
            type="text"
            value={newCategory}
            onChange={handleCategory}
            placeholder="Category"
          />
          <input
            type="text"
            value={newAmount}
            onChange={handleAmount}
            placeholder="Amount"
          />
          <input type="submit" value="Add Transaction" />
        </form>
      </div>
    );
  }

  export default Form;