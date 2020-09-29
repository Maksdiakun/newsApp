import React from "react";
import NewsSearch from "../NewsSearch";
import NewsSort from "../NewsSort";
import MultiSelect from "../MultiSelect";
import "./newsHeader.scss";
const NewsHeader = () => {
  return (
    <div className="news_header">
      <NewsSort />
      <NewsSearch />
      <MultiSelect />
    </div>
  );
};
export default NewsHeader;
