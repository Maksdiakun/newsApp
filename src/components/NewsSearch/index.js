import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNews } from "../../store/actions/newsActions";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const startsearch = useSelector((state) => state.news.search);
  const [searchVal, setSearchVal] = useState("");
  const changeHandler = (event) => setSearchVal(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(searchNews(searchVal));
  };
  useEffect(() => {
    setSearchVal(startsearch);
  }, []);
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

export default NewsSearch;
