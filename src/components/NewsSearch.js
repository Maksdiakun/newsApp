import React, { useState } from "react";
import { connect } from "react-redux";
import { searchNews } from "../store/actions/newsActions";

const NewsSearch = ({ searchNews }) => {
  const [searchVal, setSearchVal] = useState("");
  const changeHandler = (event) => setSearchVal(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    searchNews(searchVal);
  };
  return (
    <>
      <form className="news_search" onSubmit={submitHandler}>
        <input
          type="text"
          value={searchVal}
          onChange={changeHandler}
          required
        />
        <button type="submit" className="black_btn">
          Search
        </button>
      </form>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchNews: (word) => dispatch(searchNews(word)),
});
export default connect(null, mapDispatchToProps)(NewsSearch);
