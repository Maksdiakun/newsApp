import React from "react";
import { useDispatch } from "react-redux";
import { changeSort } from "../../store/actions/newsActions";
import { Multiselect } from "multiselect-react-dropdown";
const NewsSort = () => {
  const dispatch = useDispatch();
  const сhangeHandler = (selectedList, selectedItem) => {
    dispatch(changeSort(selectedItem.value));
  };
  const arr = [
    {
      name: "Newest",
      value: "publishedAt",
    },
    {
      name: "Popular",
      value: "popularity",
    },
  ];
  return (
    <div className="news_header_sort">
      <Multiselect
        options={arr}
        displayValue="name"
        onSelect={сhangeHandler}
        singleSelect={true}
        placeholder="Sort by"
      />
    </div>
  );
};

export default NewsSort;
