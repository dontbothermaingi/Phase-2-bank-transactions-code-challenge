import React, { useState } from "react";

function Filter({ onFilteredFormDate, transactions }) {
 
 const[selectedCategory , setSelectedCategory] = useState("")

  function handleCategoryClick(event){
    event.preventDefault()
    onFilteredFormDate(selectedCategory)
  }

  return (
    <div>
      <form onSubmit={handleCategoryClick}>
        <input
          type="text"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Filter;