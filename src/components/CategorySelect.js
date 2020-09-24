import React from "react";


const CategorySelect = ({ category, change }) => {

  const ChangeHandler = (event) => {
    change(event)
  }
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  return (
    <label >
      <span>Your favorite category: </span>
      <select name="category" value={category} onChange={ChangeHandler} >
        {categories.map(el => (
          <option key={el} value={el}>{el}</option>
        ))}
      </select>
    </label>
  )
};

export default CategorySelect;
